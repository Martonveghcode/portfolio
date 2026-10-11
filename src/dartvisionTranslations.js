const screenshot = (alt, caption) => [{
  src: "/projects/dartvision.png",
  width: 1225,
  height: 825,
  alt,
  caption,
}];

export const DARTVISION_CASE_STUDY_TRANSLATIONS = {
  es: {
    facts: [["Plataforma", "Escritorio Windows · Python y OpenCV"], ["Modos de juego", "301/501 individual · cierre con doble"], ["Entrada", "Cámara RTSP · dardos marcados"]],
    sections: [
      ["Seguir un turno de tres dardos", "DartVision muestra la puntuación junto a la imagen de la diana. Cada dardo ocupa una posición permanente, por lo que un dardo posterior que lo tape no borra su puntuación. La interfaz calcula los puntos restantes, admite cierre con doble y pasa al siguiente turno tras retirar los dardos."],
      ["Relacionar la imagen con las zonas de puntuación", "OpenCV compara los fotogramas con una referencia de la diana vacía, detecta bandas de cinta brillantes con evidencia del cuerpo del dardo y estima el contacto mediante la geometría calibrada. Un perfil empírico compatible refina la estimación. La coincidencia temporal y las comprobaciones de los alambres controlan la aceptación automática. Los cambios grandes de cámara requieren una referencia verificada o una nueva calibración; la diana debe estar vacía al establecer la base de juego."],
      ["Corregir los resultados inciertos", "El jugador puede corregir cada lanzamiento, introducir fallos fuera de cámara y seguir puntuando manualmente. Los informes locales conservan imágenes y decisiones. El repositorio público incluye instrucciones y pruebas; las credenciales, capturas personales y perfiles entrenados permanecen locales. Es un prototipo desarrollado para una configuración concreta: su precisión física independiente y su fiabilidad en otros equipos aún no están validadas."],
    ],
    media: screenshot("DartVision con tres dardos detectados y 267 puntos restantes", "Un turno real: 3, 11 y 20 simples reducen la puntuación de 301 a 267. La vista de la diana identifica cada dardo."),
  },
  fr: {
    facts: [["Plateforme", "Application Windows · Python et OpenCV"], ["Modes de jeu", "301/501 solo · finition sur un double"], ["Entrée", "Caméra RTSP · fléchettes marquées"]],
    sections: [
      ["Suivre une volée de trois fléchettes", "DartVision affiche le score à côté de la cible en direct. Chaque fléchette garde son emplacement dans la volée : une fléchette suivante qui la masque ne supprime pas ses points. L'interface calcule le total restant, permet une finition sur un double et passe à la volée suivante après le retrait des fléchettes."],
      ["Relier l'image aux zones de score", "OpenCV compare les images à une référence de la cible vide, détecte des bandes de ruban claires avec des indices du corps de la fléchette et estime le contact à partir de la géométrie calibrée. Un profil empirique compatible affine l'estimation. L'accord entre plusieurs images et les vérifications près des fils encadrent l'acceptation automatique. Un déplacement important exige une référence vérifiée ou un nouvel étalonnage ; la cible doit être vide pour établir la référence de jeu."],
      ["Corriger les résultats incertains", "Le joueur peut corriger chaque lancer, saisir les ratés hors champ et continuer à compter manuellement. Les rapports locaux conservent les images et décisions. Le dépôt public fournit les instructions et tests ; les identifiants, captures personnelles et profils entraînés restent locaux. Ce prototype dépend d'une configuration précise : sa précision physique indépendante et sa fiabilité sur d'autres équipements ne sont pas encore validées."],
    ],
    media: screenshot("DartVision avec trois fléchettes détectées et 267 points restants", "Une volée réelle : simple 3, simple 11 et simple 20 font passer le score de 301 à 267. Chaque fléchette est repérée sur la cible."),
  },
  de: {
    facts: [["Plattform", "Windows-Desktop · Python und OpenCV"], ["Spielmodi", "301/501 für einen Spieler · Double-out"], ["Eingabe", "RTSP-Kamera · markierte Darts"]],
    sections: [
      ["Eine Aufnahme mit drei Darts verfolgen", "DartVision zeigt den Punktestand neben dem Livebild der Scheibe. Jeder Dart behält seinen festen Platz in der Aufnahme; verdeckt ein späterer Dart einen früheren, bleibt dessen Punktzahl erhalten. Die Oberfläche berechnet die Restpunkte, unterstützt Double-out und beginnt nach dem Entfernen der Darts die nächste Aufnahme."],
      ["Kamerabilder den Feldern zuordnen", "OpenCV vergleicht Bilder mit einer Referenz der leeren Scheibe, erkennt helle Klebebandmarkierungen mit passenden Hinweisen auf den Dartkörper und schätzt den Kontakt anhand der kalibrierten Geometrie. Ein kompatibles empirisches Kontaktprofil verbessert die Schätzung. Übereinstimmung über mehrere Bilder und Prüfungen an den Drähten steuern die automatische Wertung. Größere Kamerabewegungen erfordern eine geprüfte Referenz oder eine neue Kalibrierung; die Spielreferenz wird nur bei leerer Scheibe eingerichtet."],
      ["Unsichere Wertungen korrigieren", "Spieler können einzelne Würfe korrigieren, unsichtbare Fehlwürfe eintragen und manuell weiterzählen. Lokale Berichte speichern Bilder und Entscheidungen. Das öffentliche Repository enthält Anleitung und Tests; Zugangsdaten, persönliche Aufnahmen und trainierte Profile bleiben lokal. Der Prototyp wurde für einen bestimmten Aufbau entwickelt. Unabhängige physische Genauigkeit und Zuverlässigkeit bei anderen Aufbauten sind noch nicht validiert."],
    ],
    media: screenshot("DartVision mit drei erkannten Darts und 267 Restpunkten", "Eine echte Aufnahme: Single 3, Single 11 und Single 20 senken den Punktestand von 301 auf 267. Jeder erkannte Dart ist im Bild markiert."),
  },
  hu: {
    facts: [["Platform", "Windows asztali alkalmazás · Python és OpenCV"], ["Játékmódok", "Egyszemélyes 301/501 · dupla kiszálló"], ["Bemenet", "RTSP-kamera · megjelölt dartsok"]],
    sections: [
      ["Háromdobásos kör követése", "A DartVision a tábla élő képe mellett mutatja a pontszámot. Minden darts állandó helyet kap a körben: ha egy későbbi darts eltakarja, a pontszáma megmarad. A felület számolja a maradék pontokat, támogatja a dupla kiszállót, és a dartsok kivétele után új kört indít."],
      ["A kamerakép és a pontmezők összekapcsolása", "Az OpenCV összehasonlítja a képkockákat az üres tábla referenciájával, felismeri a világos szalagjelöléseket és a darts testének alátámasztó képi jeleit, majd a kalibrált geometriával megbecsüli az érintkezési pontot. Egy kompatibilis empirikus profil pontosítja a becslést. Több képkocka egyezése és a drótok körüli ellenőrzések szabályozzák az automatikus pontozást. Nagyobb kameraelmozduláshoz ellenőrzött referencia vagy új kalibráció kell; a játék alapképe csak üres táblán állítható be."],
      ["Bizonytalan pontszámok javítása", "A játékos javíthatja az egyes dobásokat, beírhatja a kamerán kívüli hibákat, és kézzel folytathatja a pontozást. A helyi jelentések megőrzik a képeket és döntéseket. A nyilvános tároló útmutatót és teszteket tartalmaz; a belépési adatok, személyes felvételek és tanított profilok helyben maradnak. A prototípus egy meghatározott összeállításra készült. A független fizikai pontosság és a más összeállításokon való megbízhatóság még nincs validálva."],
    ],
    media: screenshot("DartVision három felismert dartsszal és 267 maradék ponttal", "Egy valódi kör: a szimpla 3, 11 és 20 dobások 301-ről 267-re csökkentik a pontszámot. A táblaképen minden felismert darts jelölést kap."),
  },
};
