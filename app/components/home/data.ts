export const founders = [
  "Arjun Maheswara Paundra",
  "Frans Maylandgo Saragih",
  "Fahdil Raihandi",
  "Andy Emerik",
  "Christian Haikhel Sengkley",
  "Muhammad Rasyid",
  "Zulfikarnaen",
  "Rifa Dwinanda Bagaskara",
];

export const archiveLinks = [
  {
    title: "Galeri",
    desc: "Dokumentasi visual momen KBM.",
    href: "/galeri",
  },
  {
    title: "Gaming",
    desc: "Riwayat game malam, party, dan momen random.",
    href: "/gaming",
  },
  {
    title: "Kutipan",
    desc: "Quote anggota yang terlalu khas untuk hilang.",
    href: "/kutipan",
  },
  {
    title: "Pameran",
    desc: "Proyek dan aib dalam satu ruang.",
    href: "/pameran-proyek",
  },
  {
    title: "Playlist",
    desc: "Lagu untuk suasana KBM.",
    href: "/playlist",
  },
];

export const notes = [
  "KBM lahir dari tongkrongan kelas dan kebiasaan bermain game bersama.",
  "Nama awal grup yang menjadi cikal bakal KBM adalah Mini Militia.",
  "Nilai utama KBM adalah kekeluargaan, solid, kompak, dan komunikasi yang baik.",
  "KBM menjadi ruang untuk game, nugas, pemrograman, dokumentasi, dan humor internal.",
];

export const activities = [
  "Gaming",
  "Nugas",
  "Pemrograman",
  "Game Malam",
  "Kutipan",
  "Dokumentasi",
  "Pameran Proyek",
  "Pameran Aib",
];

export const ladderWords = ["Keluarga", "Solid", "Random", "Gaming", "Nugas"];

if (founders.length !== 8) {
  throw new Error("Founders harus berisi 8 nama.");
}

if (archiveLinks.length !== 5) {
  throw new Error("Archive links harus berisi 5 item.");
}

if (notes.length !== 4) {
  throw new Error("Notes harus berisi 4 item.");
}

if (!activities.includes("Gaming") || !activities.includes("Nugas")) {
  throw new Error("Aktivitas penting KBM belum lengkap.");
}
