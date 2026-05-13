export interface Character {
  id: string;
  name: string;
  smallImg: string;
  largeImg: string;
  skins: string[];
  skinNames: string[];
  height: string;
  fighting: string;
  skills: string;
  birth: string;
}

export interface GalleryItem {
  src: string;
  caption: string;
}

export const characters: Character[] = [
  {
    id: "frans",
    name: "Frans",
    smallImg: "/characters/frans-emo.png",
    largeImg: "/characters/frans-emo.png",
    skins: [
      "/characters/frans-emo.png",
      "https://i.imgur.com/vUI1ZQn.png",
      "https://i.imgur.com/vUI1ZQn.png",
    ],
    skinNames: ["Default", "Evil Ryu", "Kage"],
    height: '5"9',
    fighting: "Ansatsuken",
    skills: "Sleeping anywhere",
    birth: "jp",
  },
  {
    id: "paundra",
    name: "Paundra",
    smallImg: "/characters/paundra-batik.png",
    largeImg: "/characters/paundra-batik.png",
    skins: [
      "/characters/paundra-batik.png",
      "/characters/paundra-bunga.png",
      "/characters/paundra-gaming.png",
    ],
    skinNames: ["Default", "Flower", "Gaming"],
    height: '5"9',
    fighting: "Ansatsuken",
    skills: "Cooking pasta",
    birth: "us",
  },
  {
    id: "chun_li",
    name: "Chun-Li",
    smallImg: "https://i.imgur.com/JanSGQN.jpg",
    largeImg: "https://i.imgur.com/Mk2hOGy.png",
    skins: [
      "https://i.imgur.com/Mk2hOGy.png",
      "https://i.imgur.com/Mk2hOGy.png",
      "https://i.imgur.com/Mk2hOGy.png",
    ],
    skinNames: ["Default", "Alpha", "Classic"],
    height: '5"6',
    fighting: "Chinese martial arts",
    skills: "Shooting",
    birth: "cn",
  },
  {
    id: "dee_jay",
    name: "Dee Jay",
    smallImg: "https://i.imgur.com/m9jF70j.jpg",
    largeImg: "https://i.imgur.com/egxPEel.png",
    skins: [
      "https://i.imgur.com/egxPEel.png",
      "https://i.imgur.com/egxPEel.png",
      "https://i.imgur.com/egxPEel.png",
    ],
    skinNames: ["Default", "Gold", "Classic"],
    height: '6"1',
    fighting: "Kickboxing",
    skills: "Bamboo dancing",
    birth: "jm",
  },
  {
    id: "cammy",
    name: "Cammy",
    smallImg: "https://i.imgur.com/1nbNw4y.jpg",
    largeImg: "https://i.imgur.com/8nXZIXB.png",
    skins: [
      "https://i.imgur.com/8nXZIXB.png",
      "https://i.imgur.com/8nXZIXB.png",
      "https://i.imgur.com/8nXZIXB.png",
    ],
    skinNames: ["Default", "Shadaloo", "Delta Red"],
    height: '5"5',
    fighting: "Shadaloo/Special Forces Training",
    skills: "Knife throwing",
    birth: "gb",
  },
  {
    id: "sagat",
    name: "Sagat",
    smallImg: "https://i.imgur.com/jpqFU6p.jpg",
    largeImg: "https://i.imgur.com/tDPvjFV.png",
    skins: [
      "https://i.imgur.com/tDPvjFV.png",
      "https://i.imgur.com/tDPvjFV.png",
      "https://i.imgur.com/tDPvjFV.png",
    ],
    skinNames: ["Default", "Shadow", "Classic"],
    height: '7"5',
    fighting: "Muay Thai",
    skills: "Breathing underwater",
    birth: "th",
  },
  {
    id: "zangief",
    name: "Zangief",
    smallImg: "https://i.imgur.com/NSjnTfw.jpg",
    largeImg: "https://i.imgur.com/JfZ4TFq.png",
    skins: [
      "https://i.imgur.com/JfZ4TFq.png",
      "https://i.imgur.com/JfZ4TFq.png",
      "https://i.imgur.com/JfZ4TFq.png",
    ],
    skinNames: ["Default", "Mecha", "Classic"],
    height: '7"0',
    fighting: "Russian/American Pro Wrestling",
    skills: "Resistance to cold",
    birth: "ru",
  },
  {
    id: "akuma",
    name: "Akuma",
    smallImg: "https://i.imgur.com/91ycpqp.jpg",
    largeImg: "https://i.imgur.com/YFCTE8T.png",
    skins: [
      "https://i.imgur.com/YFCTE8T.png",
      "https://i.imgur.com/YFCTE8T.png",
      "https://i.imgur.com/YFCTE8T.png",
    ],
    skinNames: ["Default", "Shin Akuma", "Classic"],
    height: '5"10',
    fighting: "Satsui no Hado/Ansatsuken",
    skills: "Martial Arts",
    birth: "jp",
  },
  {
    id: "blanka",
    name: "Blanka",
    smallImg: "https://i.imgur.com/kcxHcmb.jpg",
    largeImg: "https://i.imgur.com/N1leELw.png",
    skins: [
      "https://i.imgur.com/N1leELw.png",
      "https://i.imgur.com/N1leELw.png",
      "https://i.imgur.com/N1leELw.png",
    ],
    skinNames: ["Default", "Blue", "Classic"],
    height: '6"4',
    fighting: "Feral movement, electric attacks",
    skills: "Hunting",
    birth: "br",
  },
];

export const galleryByCharacter: Record<string, GalleryItem[]> = {
  frans: [
    { src: "https://i.imgur.com/vUI1ZQn.png", caption: "Evil Ryu Mode" },
    { src: "https://i.imgur.com/vUI1ZQn.png", caption: "Kage Awakening" },
    { src: "https://i.imgur.com/vUI1ZQn.png", caption: "Training Arc" },
  ],
  paundra: [
    { src: "/characters/paundra-bunga.png", caption: "Flower Mode" },
    { src: "/characters/paundra-gaming.png", caption: "Gaming Mode" },
    { src: "/characters/paundra-batik.png", caption: "Batik Heritage" },
  ],
  chun_li: [
    { src: "https://i.imgur.com/Mk2hOGy.png", caption: "Interpol Agent" },
    { src: "https://i.imgur.com/Mk2hOGy.png", caption: "Alpha Costume" },
    { src: "https://i.imgur.com/Mk2hOGy.png", caption: "Classic Look" },
  ],
  dee_jay: [
    { src: "https://i.imgur.com/egxPEel.png", caption: "Gold Edition" },
    { src: "https://i.imgur.com/egxPEel.png", caption: "Jamaica Pride" },
    { src: "https://i.imgur.com/egxPEel.png", caption: "Stage Show" },
  ],
  cammy: [
    { src: "https://i.imgur.com/8nXZIXB.png", caption: "Delta Red" },
    { src: "https://i.imgur.com/8nXZIXB.png", caption: "Shadaloo Suit" },
    { src: "https://i.imgur.com/8nXZIXB.png", caption: "Street Look" },
  ],
  sagat: [
    { src: "https://i.imgur.com/tDPvjFV.png", caption: "Emperor of Muay Thai" },
    { src: "https://i.imgur.com/tDPvjFV.png", caption: "Shadow Form" },
    { src: "https://i.imgur.com/tDPvjFV.png", caption: "Classic Gi" },
  ],
  zangief: [
    { src: "https://i.imgur.com/JfZ4TFq.png", caption: "Red Cyclone" },
    { src: "https://i.imgur.com/JfZ4TFq.png", caption: "Mecha Zangief" },
    { src: "https://i.imgur.com/JfZ4TFq.png", caption: "Soviet Pride" },
  ],
  akuma: [
    { src: "https://i.imgur.com/YFCTE8T.png", caption: "Demon King" },
    { src: "https://i.imgur.com/YFCTE8T.png", caption: "Shin Akuma" },
    { src: "https://i.imgur.com/YFCTE8T.png", caption: "Raging Demon" },
  ],
  blanka: [
    { src: "https://i.imgur.com/N1leELw.png", caption: "Amazon Beast" },
    { src: "https://i.imgur.com/N1leELw.png", caption: "Electric Surge" },
    { src: "https://i.imgur.com/N1leELw.png", caption: "Jungle Predator" },
  ],
};

export const bioByCharacter: Record<string, string> = {
  frans:
    "A wandering warrior who mastered the art of sleeping mid-battle. His Ansatsuken technique is unorthodox — fueled entirely by naps and vague ambition.",
  paundra:
    "Born with a spatula in one hand and a controller in the other, Paundra fights with the grace of freshly cooked pasta and the precision of a pro gamer.",
  chun_li:
    "Interpol's finest. Trained since childhood in Chinese martial arts, she seeks vengeance against Shadaloo while maintaining impeccable hair at all times.",
  dee_jay:
    "Jamaica's breakbeat champion turned street fighter. His Dread Kicks hit harder than a bass drop at 3AM. He fights to the rhythm of his own mixtape.",
  cammy:
    "Engineered by Shadaloo, liberated by willpower. Delta Red's sharpest blade, she fights for Britain and for the fragments of a self she had to rebuild.",
  sagat:
    "The Emperor of Muay Thai carries one scar given by Ryu — and one obsession. Seven feet of unrelenting fury, still hunting redemption in every bout.",
  zangief:
    "Russia's national hero. He wrestled bears for fun before discovering street fighting was, somehow, more intense. The Red Cyclone breaks bones and spirits.",
  akuma:
    "He abandoned humanity to master the Satsui no Hado. Akuma exists at the edge of life and death, seeking only the perfect battle to finally end him.",
  blanka:
    "Lost in the Amazon as a child, he became something feral and electric. Blanka doesn't fight with technique — he fights with pure survival instinct.",
};

export const statLabels = ["Power", "Speed", "Defense", "Technique"];

export const statsByCharacter: Record<string, number[]> = {
  frans: [65, 80, 55, 70],
  paundra: [70, 75, 65, 80],
  chun_li: [75, 95, 70, 90],
  dee_jay: [80, 85, 65, 75],
  cammy: [78, 92, 68, 88],
  sagat: [95, 60, 80, 85],
  zangief: [99, 45, 90, 60],
  akuma: [98, 88, 40, 95],
  blanka: [85, 78, 72, 55],
};
