export interface Character {
  id: string;
  name: string;
  smallImg: string;
  largeImg: string;
  skins: string[];      // minimal 1 — skin pertama = default
  skinNames: string[];  // nama per skin, index harus sama dengan skins[]
  height: string;
  fighting: string;
  skills: string;
  birth: string;
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

// URL background per negara — dipakai sebagai inline style backgroundImage
export const bgMap: Record<string, string> = {
  jp: "https://i.imgur.com/MH5qQZJ.png",
  us: "https://i.imgur.com/pTiVIhQ.png",
  cn: "https://i.imgur.com/eyAk1PU.png",
  jm: "https://i.imgur.com/MLLlRcp.png",
  gb: "https://i.imgur.com/SQbEu4H.png",
  th: "https://i.imgur.com/4mgO34r.png",
  ru: "https://i.imgur.com/MWmPOPt.png",
  br: "https://i.imgur.com/CHg5ek3.png",
};