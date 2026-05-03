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
  { id: 1, nama: "Member 1", game: "MLBB", role: "Jungler", rank: "Mythical Glory", favHero: "Ling, Lancelot", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", winrate: "68.5%", matches: "450", bio: "Gak hyper gak senyum. Kalo buff biru dicolong langsung afk." },
  { id: 2, nama: "Member 2", game: "MLBB", role: "Roamer", rank: "Mythic Honor", favHero: "Khufra, Minotaur", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka", winrate: "55.2%", matches: "620", bio: "Tumbal kemenangan tim. Sering mati demi buka map." },
  { id: 3, nama: "Member 3", game: "MLBB", role: "Gold Laner", rank: "Mythic", favHero: "Beatrix, Claude", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack", winrate: "60.1%", matches: "310", bio: "Tahan bawa late game, gue yang bantai." },
  { id: 4, nama: "Member 4", game: "MLBB", role: "Mid Laner", rank: "Legend I", favHero: "Kagura, Yve", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Milo", winrate: "58.0%", matches: "280", bio: "Tukang nyampah kill Jungler." },
  { id: 5, nama: "Member 5", game: "MLBB", role: "EXP Laner", rank: "Legend II", favHero: "Yu Zhong, Lapu-Lapu", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver", winrate: "52.4%", matches: "400", bio: "Adu mekanik by one sini di lane." },
  { id: 6, nama: "Member 6", game: "MLBB", role: "Camat", rank: "Epic", favHero: "Miya, Layla", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie", winrate: "45.1%", matches: "890", bio: "Maaf internet kosan lag bro." },
  
  // Player Valorant
  { id: 7, nama: "Member 7", game: "Valorant", role: "Duelist", rank: "Platinum 3", favHero: "Jett, Reyna", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam", winrate: "51.2%", matches: "120", bio: "Instalock Jett tapi bottom frag." },
  
  // Player Free Fire
  { id: 8, nama: "Member 8", game: "Free Fire", role: "Rusher", rank: "Heroic", favHero: "Alok, Kelly", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo", winrate: "40.0%", matches: "300", bio: "Lompat-lompat nembak copot pala kau." },

  // Player eFootball
  { id: 9, nama: "Member 9", game: "eFootball", role: "Manajer", rank: "Divisi 1", favHero: "Guardiola (Taktik)", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob", winrate: "70.5%", matches: "150", bio: "Tiki-taka harga mati, anti long ball club." }
];