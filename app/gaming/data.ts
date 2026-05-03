export interface PlayerData {
  id: number;
  nama: string;
  game: string;
  role: string;
  rank: string;
  favHero: string;
  img: string;
  winrate: string;
  matches: string;
  bio: string;
}

export const membersData: PlayerData[] = [
  // 6 Player MLBB
  { id: 1, nama: "Frans Maylandgo S (Franzxml)", game: "MLBB", role: "Flex", rank: "Mythic", favHero: "Selena", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", winrate: "68.5%", matches: "450", bio: "Gak hyper gak senyum. Kalo buff biru dicolong langsung afk." },
  { id: 2, nama: "Fahdil R (BebanTeam)", game: "MLBB", role: "Roamer/ Exp", rank: "Mythical Glory", favHero: "Johnson", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka", winrate: "55.2%", matches: "620", bio: "Tumbal kemenangan tim. Sering mati demi buka map." },
  { id: 3, nama: "A M Paundra (Blackpajak)", game: "MLBB", role: "Gold Laner/Mid Lanner", rank: "Mythic", favHero: "Hanabi, Kimmy", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack", winrate: "60.1%", matches: "310", bio: "Tahan bawa late game, gue yang bantai." },
  { id: 4, nama: "Christian H S (Aoii)", game: "MLBB", role: "Hyper/Exp", rank: "Mythical Honor", favHero: "Alok", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Milo", winrate: "58.0%", matches: "280", bio: "Tukang nyampah kill Jungler." },
  { id: 5, nama: "Rifa D Bagaskara (tulisan korea pokonya)", game: "MLBB", role: "Mid Laner", rank: "Legend II", favHero: "Yu Zhong, Lapu-Lapu", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver", winrate: "52.4%", matches: "400", bio: "Adu mekanik by one sini di lane." },
  { id: 6, nama: "Andy E (Framelord)", game: "MLBB", role: "Flex", rank: "Epic", favHero: "Miya, Layla", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie", winrate: "45.1%", matches: "890", bio: "Maaf internet kosan lag bro." },
  
  // Player Valorant
  { id: 7, nama: "Rifa D Bagaskara", game: "Valorant", role: "Duelist", rank: "Platinum 3", favHero: "Jett, Reyna", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam", winrate: "51.2%", matches: "120", bio: "Instalock Jett tapi bottom frag." },
  
  // Player Free Fire
  { id: 8, nama: "Zulfikarnaen", game: "Free Fire", role: "Rusher", rank: "Heroic", favHero: "Alok, Kelly", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo", winrate: "40.0%", matches: "300", bio: "Lompat-lompat nembak copot pala kau." },

  // Player eFootball
  { id: 9, nama: "Fahdil R", game: "eFootball", role: "Manajer", rank: "Divisi 1", favHero: "Guardiola (Taktik)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", winrate: "70.5%", matches: "150", bio: "Tiki-taka harga mati, anti long ball club." },
  { id: 10, nama: "M Rasyid", game: "eFootball", role: "Manajer", rank: "Divisi 1", favHero: "Guardiola (Taktik)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", winrate: "70.5%", matches: "150", bio: "Tiki-taka harga mati, anti long ball club." },
  { id: 11, nama: "Christian H S", game: "eFootball", role: "Manajer", rank: "Divisi 1", favHero: "Guardiola (Taktik)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", winrate: "70.5%", matches: "150", bio: "Tiki-taka harga mati, anti long ball club." },
  { id: 12, nama: "Zulfikarnaen", game: "eFootball", role: "Manajer", rank: "Divisi 1", favHero: "Guardiola (Taktik)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", winrate: "70.5%", matches: "150", bio: "Tiki-taka harga mati, anti long ball club." }
];

// DATA HISTORI GAMING KBM
export const historiData = [
  { id: 1, match: "KBM vs Anak Sistem Informasi Kelas B", game: "MLBB", result: "VICTORY", score: "3 - 1", date: "Malam Minggu Lalu" },
  { id: 2, match: "KBM vs Bocil Warnet", game: "Valorant", result: "DEFEAT", score: "11 - 13", date: "Kamis Malam" },
  { id: 3, match: "KBM Internal By One", game: "eFootball", result: "DRAW", score: "0 - 0", date: "Tadi Sore" },
  { id: 4, match: "KBM Mabar Santuy", game: "Free Fire", result: "BOOYAH", score: "Ranked", date: "Jumat Berkah" }
];

// DATA QUOTES KBM
export const quotesData = [
  { id: 1, name: "A M Paundra", quote: "Lebih baik kehilangan turret daripada kehilangan kesempatan farming minion.", game: "MLBB" },
  { id: 2, name: "Frans Maylandgo", quote: "Gue lag woi, sumpah patah-patah! (Padahal ping 12ms).", game: "MLBB" },
  { id: 3, name: "Fahdil R", quote: "Tiki-taka itu seni, trobosan lambung itu judi.", game: "eFootball" },
  { id: 4, name: "Rifa D", quote: "Gak perlu nembak kepala, yang penting gaya pas nge-dash.", game: "Valorant" }
];