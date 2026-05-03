export interface PlayerData {
  id: number;
  nama: string;
  game: string; // Sekarang spesifik nama gamenya
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
  { id: 3, nama: "A M Paundra (Blackpajak)", game: "MLBB", role: "Gold Laner/Mid Lanner", rank: "Mythic", favHero: "Hanabi,Kimmy", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack", winrate: "60.1%", matches: "310", bio: "Tahan bawa late game, gue yang bantai." },
  { id: 4, nama: "Christian H S (Aoii)", game: "MLBB", role: "Hyper/Exp/", rank: "Mythical Honor", favHero: "Alok", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Milo", winrate: "58.0%", matches: "280", bio: "Tukang nyampah kill Jungler." },
  { id: 5, nama: "Rifa D Bagaskara ( tulisan korea pokonya)", game: "MLBB", role: "Mid Laner", rank: "Legend II", favHero: "Yu Zhong, Lapu-Lapu", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver", winrate: "52.4%", matches: "400", bio: "Adu mekanik by one sini di lane." },
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