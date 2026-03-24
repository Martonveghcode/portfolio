import { useEffect, useMemo, useState } from "react";

const HEATMAP_COLORS = {
  blue: ["#d8e8ff", "#9fc3ff", "#5e9bf0", "#0a6cda", "#005fcc"],
  green: ["#d5f0dc", "#95d5aa", "#55b977", "#1f883d", "#166c2c"],
  red: ["#fde0e2", "#f7b0b5", "#e56d77", "#cf222e", "#a40e18"],
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function alignToStartOfWeek(date, startWeekday = 1) {
  const jsStart = startWeekday === 7 ? 0 : startWeekday;
  const jsDay = date.getDay();
  const diff = (jsDay - jsStart + 7) % 7;
  const aligned = new Date(date);
  aligned.setHours(0, 0, 0, 0);
  aligned.setDate(aligned.getDate() - diff);
  return aligned;
}

function computeLevel(count, maxCount) {
  if (!maxCount) return 0;
  const ratio = count / maxCount;
  if (ratio === 0) return 0;
  if (ratio < 0.25) return 1;
  if (ratio < 0.5) return 2;
  if (ratio < 0.75) return 3;
  return 4;
}

function normalizeEntries(rawEntries = [], minDate, maxDate) {
  if (!minDate || !maxDate) return [];

  const rangeMin = new Date(minDate);
  rangeMin.setHours(0, 0, 0, 0);
  const rangeMax = new Date(maxDate);
  rangeMax.setHours(0, 0, 0, 0);

  const parsedEntries = rawEntries
    .map((entry) => ({
      date: entry.date instanceof Date ? entry.date : new Date(entry.date),
      count: entry.count ?? entry.value ?? 0,
      level: entry.level,
    }))
    .filter((entry) => entry.date >= rangeMin && entry.date <= rangeMax);

  const maxCount = parsedEntries.reduce((max, entry) => Math.max(max, entry.count), 0);

  return parsedEntries.map((entry) => ({
    ...entry,
    level: entry.level ?? computeLevel(entry.count, maxCount),
  }));
}

function buildWeeks(entries, minDate, maxDate, startWeekday) {
  if (!minDate || !maxDate) return [];

  const rangeMin = new Date(minDate);
  rangeMin.setHours(0, 0, 0, 0);
  const rangeMax = new Date(maxDate);
  rangeMax.setHours(0, 0, 0, 0);

  const entryMap = new Map();
  entries.forEach((entry) => {
    entryMap.set(formatDateKey(entry.date), entry);
  });

  const weeks = [];
  let cursor = alignToStartOfWeek(rangeMin, startWeekday);

  while (cursor <= rangeMax) {
    const week = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const day = new Date(cursor);
      day.setDate(cursor.getDate() + dayIndex);
      day.setHours(0, 0, 0, 0);

      const key = formatDateKey(day);
      const entry = entryMap.get(key);

      week.push({
        date: day,
        count: entry?.count ?? 0,
        level: entry?.level ?? 0,
        inRange: day >= rangeMin && day <= rangeMax,
      });
    }

    weeks.push(week);
    cursor = new Date(cursor);
    cursor.setDate(cursor.getDate() + 7);
  }

  return weeks;
}

export default function ContributionHeatmap({
  username,
  entries: providedEntries,
  heatmapColor = "blue",
  showMonthLabels = true,
  showCellDate = false,
  startWeekday = 1,
  cellRadius = 6,
  cellSize = 14,
  minDate,
  maxDate = new Date(),
  onCellTap,
}) {
  const [entries, setEntries] = useState(() => normalizeEntries(providedEntries ?? [], minDate, maxDate));
  const [status, setStatus] = useState(providedEntries?.length ? "ready" : "loading");

  useEffect(() => {
    if (providedEntries?.length) {
      setEntries(normalizeEntries(providedEntries, minDate, maxDate));
      setStatus("ready");
      return undefined;
    }

    if (!username) return undefined;

    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      setStatus("loading");

      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load contributions (${response.status})`);
        }

        const payload = await response.json();
        const normalized = normalizeEntries(payload.contributions ?? [], minDate, maxDate);

        if (!cancelled) {
          setEntries(normalized);
          setStatus("ready");
        }
      } catch (error) {
        if (cancelled || error.name === "AbortError") return;
        console.error("Failed to load contributions", error);
        setEntries([]);
        setStatus("error");
      }
    }

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [providedEntries, username, minDate, maxDate]);

  const colorScale = HEATMAP_COLORS[heatmapColor] ?? HEATMAP_COLORS.blue;
  const columnGap = 4;

  const weeks = useMemo(
    () => buildWeeks(entries, minDate, maxDate, startWeekday),
    [entries, minDate, maxDate, startWeekday]
  );

  const total = entries.reduce((sum, entry) => sum + entry.count, 0);
  const startLabel = minDate
    ? minDate.toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })
    : "";

  const statusLabel =
    status === "loading"
      ? "Loading contributions..."
      : status === "error"
        ? "Could not load contributions"
        : `${total} contributions since ${startLabel}`;

  return (
    <div
      className="heatmap-shell"
      style={{
        "--heatmap-cell-size": `${cellSize}px`,
        "--heatmap-cell-radius": `${cellRadius}px`,
      }}
    >
      {showMonthLabels && weeks.length ? (
        <div
          className="heatmap-months"
          style={{
            gridTemplateColumns: `repeat(${weeks.length}, ${cellSize}px)`,
            columnGap: `${columnGap}px`,
          }}
        >
          {weeks.map((week, index) => {
            const weekStartDate = week[0]?.date;
            const previousStartDate = weeks[index - 1]?.[0]?.date;
            const shouldLabel =
              weekStartDate && (!previousStartDate || weekStartDate.getMonth() !== previousStartDate.getMonth());

            return shouldLabel ? (
              <span key={`month-${index}`} style={{ gridColumnStart: index + 1 }}>
                {MONTH_NAMES[weekStartDate.getMonth()]}
              </span>
            ) : null;
          })}
        </div>
      ) : null}

      <div className="heatmap-grid" style={{ columnGap: `${columnGap}px` }}>
        {weeks.map((week, weekIndex) => (
          <div key={`week-${weekIndex}`} className="heatmap-week" style={{ rowGap: `${columnGap}px` }}>
            {week.map((day, dayIndex) => {
              const color = day.inRange ? colorScale[Math.min(colorScale.length - 1, day.level)] : "transparent";
              const label = `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date.toLocaleDateString()}`;

              return (
                <button
                  type="button"
                  key={`day-${weekIndex}-${dayIndex}`}
                  className={`heatmap-day ${day.inRange ? "" : "heatmap-day--outside"}`}
                  style={{
                    backgroundColor: day.inRange ? color : "transparent",
                    borderColor: day.inRange && day.level > 0 ? color : "var(--heatmap-border)",
                    color: showCellDate ? "var(--heatmap-text)" : "transparent",
                  }}
                  aria-label={label}
                  title={label}
                  onClick={() => {
                    if (onCellTap) onCellTap(day.date, day.count);
                  }}
                >
                  {showCellDate && day.inRange ? day.date.getDate() : null}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="heatmap-meta">
        <span className="small muted">{statusLabel}</span>
      </div>
    </div>
  );
}
