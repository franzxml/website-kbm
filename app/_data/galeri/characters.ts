export interface Character {
  id: string;
  name: string;
  smallImg: string;
  largeImg: string;
  skins: string[];
  modeImgs: string[];
  skinNames: string[];
  modeBios: string[];
  modeStats: number[][];
  height: string;
  fighting: string;
  skills: string;
  birth: string;
}

export const characters: Character[] = [
  {
    id: "andy",
    name: "Andy",
    smallImg: "/characters/bg/andy-batik.jpg",
    largeImg: "/characters/no-bg/andy-batik.png",
    skins: [
      "/characters/no-bg/andy-batik.png",
      "/characters/no-bg/andy-merenung.png",
      "/characters/no-bg/andy-mirror.png",
    ],
    modeImgs: [
      "/characters/bg/andy-batik.jpg",
      "/characters/bg/andy-merenung.jpg",
      "/characters/bg/andy-mirror.jpg",
    ],
    skinNames: ["Batik", "Merenung", "Mirror"],
    modeBios: [
      "Batik mode gives Andy a composed stance: patient reads, clean counters, and just enough elegance to make it personal.",
      "Merenung mode slows the match down. Andy watches, calculates, and punishes anyone impatient enough to swing first.",
      "Mirror mode reflects the opponent's rhythm back at them. Every fake step becomes a counter-read.",
    ],
    modeStats: [
      [74, 70, 82, 88],
      [64, 58, 86, 92],
      [70, 76, 74, 88],
    ],
    height: '5"9',
    fighting: "Mind Games",
    skills: "Overthinking with style",
    birth: "id",
  },
  {
    id: "bagas",
    name: "Bagas",
    smallImg: "/characters/bg/bagas-batik.jpg",
    largeImg: "/characters/no-bg/bagas-batik.png",
    skins: ["/characters/no-bg/bagas-batik.png"],
    modeImgs: ["/characters/bg/bagas-batik.jpg"],
    skinNames: ["Batik"],
    modeBios: [
      "Bagas enters Batik mode with grounded confidence. The style is calm, but the punish game is very awake.",
    ],
    modeStats: [[80, 70, 78, 76]],
    height: '5"9',
    fighting: "Grounded Pressure",
    skills: "Staying composed under noise",
    birth: "id",
  },
  {
    id: "chris",
    name: "Chris",
    smallImg: "/characters/bg/chris-default.jpg",
    largeImg: "/characters/no-bg/chris-default.png",
    skins: [
      "/characters/no-bg/chris-default.png",
      "/characters/no-bg/chris-dor-dor.png",
    ],
    modeImgs: [
      "/characters/bg/chris-default.jpg",
      "/characters/bg/chris-dor-dor.jpg",
    ],
    skinNames: ["Default", "Dor Dor"],
    modeBios: [
      "Default Chris plays honest pressure: steady spacing, quick confirms, and enough patience to force mistakes.",
      "Dor Dor mode is all sudden bursts. Chris trades subtlety for loud entries and momentum swings.",
    ],
    modeStats: [
      [78, 76, 72, 78],
      [90, 84, 62, 70],
    ],
    height: '5"9',
    fighting: "Pressure Play",
    skills: "Turning chaos into timing",
    birth: "id",
  },
  {
    id: "fahdil",
    name: "Fahdil",
    smallImg: "/characters/bg/fahdil-hmsi.jpeg",
    largeImg: "/characters/no-bg/fahdil-hmsi.png",
    skins: [
      "/characters/no-bg/fahdil-hmsi.png",
      "/characters/no-bg/fahdil-batik.png",
    ],
    modeImgs: [
      "/characters/bg/fahdil-hmsi.jpeg",
      "/characters/bg/fahdil-batik.jpg",
    ],
    skinNames: ["HMSI", "Batik"],
    modeBios: [
      "HMSI mode gives Fahdil committee-grade confidence. He rotates fast, hits loud, and somehow still has agenda notes ready.",
      "Batik mode makes Fahdil sharper and more deliberate. Less noise, more precision, same spotlight energy.",
    ],
    modeStats: [
      [78, 88, 64, 82],
      [74, 82, 72, 86],
    ],
    height: '5"9',
    fighting: "Campus Rush",
    skills: "Turning organisasi into aura",
    birth: "id",
  },
  {
    id: "frans",
    name: "Frans",
    smallImg: "/characters/bg/frans-symphony.jpg",
    largeImg: "/characters/no-bg/frans-symphony.png",
    skins: [
      "/characters/no-bg/frans-symphony.png",
      "/characters/no-bg/frans-emo.png",
      "/characters/no-bg/frans-maba.png",
    ],
    modeImgs: [
      "/characters/bg/frans-symphony.jpg",
      "/characters/bg/frans-emo.jpg",
      "/characters/bg/frans-maba.jpg",
    ],
    skinNames: ["Symphony", "Emo", "Maba"],
    modeBios: [
      "Symphony mode gives Frans rhythm and tempo control. Every hit lands like it was rehearsed.",
      "Emo Frans keeps the damage quiet but personal. He waits in the corner, then turns one opening into a dramatic comeback.",
      "Maba Frans is fresh, eager, and dangerously random. The fundamentals are loading, but the confidence is already installed.",
    ],
    modeStats: [
      [76, 74, 70, 88],
      [68, 78, 58, 82],
      [72, 84, 52, 66],
    ],
    height: '5"9',
    fighting: "Ansatsuken",
    skills: "Sleeping anywhere",
    birth: "id",
  },
  {
    id: "paundra",
    name: "Paundra",
    smallImg: "/characters/bg/paundra-batik.jpg",
    largeImg: "/characters/no-bg/paundra-batik.png",
    skins: [
      "/characters/no-bg/paundra-batik.png",
      "/characters/no-bg/paundra-bunga.png",
      "/characters/no-bg/paundra-gaming.png",
    ],
    modeImgs: [
      "/characters/bg/paundra-batik.jpg",
      "/characters/bg/paundra-flower.jpg",
      "/characters/bg/paundra-gaming.jpg",
    ],
    skinNames: ["Batik", "Flower", "Gaming"],
    modeBios: [
      "Batik mode is Paundra's balanced stance: composed movement, clean reads, and a little heritage buff.",
      "Flower mode softens the look but sharpens the timing. Paundra uses calm spacing before blooming into quick offense.",
      "Gaming mode turns the arena into a ranked lobby. Inputs get cleaner, reactions get faster, and mercy gets patched out.",
    ],
    modeStats: [
      [72, 74, 70, 82],
      [66, 80, 68, 86],
      [78, 88, 62, 84],
    ],
    height: '5"9',
    fighting: "Ansatsuken",
    skills: "Cooking pasta",
    birth: "id",
  },
  {
    id: "rasyid",
    name: "Rasyid",
    smallImg: "/characters/bg/rasyid-batik.jpg",
    largeImg: "/characters/no-bg/rasyid-batik.png",
    skins: [
      "/characters/no-bg/rasyid-batik.png",
      "/characters/no-bg/rasyid-mikir.png",
    ],
    modeImgs: [
      "/characters/bg/rasyid-batik.jpg",
      "/characters/bg/rasyid-mikir.jpg",
    ],
    skinNames: ["Batik", "Mikir"],
    modeBios: [
      "Batik mode balances Rasyid's discipline with style. The reads stay sharp, but the presentation gets upgraded.",
      "Mikir mode is pure calculation. Rasyid studies spacing, counts habits, and wins before the exchange even starts.",
    ],
    modeStats: [
      [76, 76, 82, 88],
      [68, 70, 78, 94],
    ],
    height: '5"9',
    fighting: "Calculated Strike",
    skills: "Thinking three turns ahead",
    birth: "id",
  },
  {
    id: "zulfi",
    name: "Zulfi",
    smallImg: "/characters/bg/zulfi-symphony.jpg",
    largeImg: "/characters/no-bg/zulfi-symphony.png",
    skins: ["/characters/no-bg/zulfi-symphony.png"],
    modeImgs: ["/characters/bg/zulfi-symphony.jpg"],
    skinNames: ["Symphony"],
    modeBios: [
      "Zulfi's Symphony mode is all tempo and control. He does not rush the fight; he conducts it.",
    ],
    modeStats: [[78, 72, 76, 92]],
    height: '5"9',
    fighting: "Tempo Control",
    skills: "Conducting momentum",
    birth: "id",
  },
];

export const statLabels = ["Power", "Speed", "Defense", "Technique"];
