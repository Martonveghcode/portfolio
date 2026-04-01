// Central place to tweak the ContributionHeatmap props.
// Mirrors the Flutter-style API in the README snippet.
export const HeatmapColor = {
  blue: "blue",
  green: "green",
  red: "red"
};

export const WeekdayLabel = {
  none: "none",
  full: "full",
  githubLike: "githubLike",
};

const heatmapConfig = {
  heatmapColor: HeatmapColor.blue,
  showMonthLabels: true,
  weekdayLabel: WeekdayLabel.full,
  splittedMonthView: false,
  showCellDate: false,
  startWeekday: 1, // DateTime.monday
  cellRadius: 0,
  cellSize: 18,
  minDate: new Date(2025, 5, 14), // June is month index 5
  maxDate: new Date(),
  entries: undefined, // Provide entries to disable fetching by username
  syntheticActivity: {
    enabled: true,
    startDate: new Date(2025, 8, 1), // September 1, 2025
    probability: 0.5,
    minExtra: 1,
    maxExtra: 3,
  },
  onCellTap: (date, value) => {
    console.log(`Tapped: ${date.toDateString()} with ${value} contributions`);
  },
};

export default heatmapConfig;
