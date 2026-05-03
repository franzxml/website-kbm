import React from 'react';
import { membersData } from './data'; // Import data dari file sebelah

export default function GamingPage() {
  const mlbbPlayers = membersData.filter(p => p.isMLBB);
  const otherPlayers = membersData.filter(p => !p.isMLBB);

  return (
    <main className="bg-[#020617] text-gray-200 min-h-screen pb-20 font-sans relative overflow-hidden">
      
      {/* CSS KHUSUS HALAMAN GAMING (Animasi RGB) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rgb-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-rgb-text {
          background: linear-gradient(270deg, #ff0000, #00ff00, #0000ff, #ff00ff, #ff0000);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgb-text 4s ease infinite;
        }
        
        @keyframes rgb-glow {
          0% { box-shadow: 0 0 15px #ff0000; border-color: #ff0000; }
          33% { box-shadow: 0 0 15px #00ff00; border-color: #00ff00; }
          66% { box-shadow: 0 0 15px #0000ff; border-color: #0000ff; }
          100% { box-shadow: 0 0 15px #ff0000; border-color: #ff0000; }
        }
        .hover-rgb:hover {
          animation: rgb-glow 1.5s linear infinite;
          transform: translateY(-5px);
        }
      `}} />

      {/* Hero Section dengan Efek RGB Text */}
      <header className="text-center py-20 bg-black border-b border-gray-800 relative shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <h1 className="text-5xl md:text-7xl font-bold animate-rgb-text tracking-widest drop-shadow-2xl uppercase">
          KBM GAMING HUB
        </h1>
        <p className="mt-4 text-gray-500 text-lg uppercase tracking-widest font-mono">
          Esports Division • Online
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-20">
        
        {/* Section 1: Jadwal Mabar */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full animate-pulse"></span>
            STATUS & JADWAL MABAR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Misi Malam Ini</h3>
              <ul className="space-y-3 font-mono">
                <li className="flex justify-between items-center"><span className="text-gray-400">Mobile Legends</span> <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-sm text-sm border border-green-500/50 animate-pulse">Gas 5 Orang</span></li>
                <li className="flex justify-between items-center"><span className="text-gray-400">Valorant</span> <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-sm text-sm border border-yellow-500/50">Butuh 1 Lagi</span></li>
                <li className="flex justify-between items-center"><span className="text-gray-400">Free Fire / eFootball</span> <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-sm text-sm border border-red-500/50">Libur</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Jadwal Rutin KBM</h3>
              <ul className="space-y-2 font-mono text-gray-400">
                <li><strong className="text-cyan-400">Jumat Malam:</strong> Full Party MLBB (Push Rank)</li>
                <li><strong className="text-orange-400">Sabtu Sore:</strong> Bebas (Valorant/eFootball/FF)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: MLBB Leaderboard */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-500 rounded-full animate-pulse"></span>
            MLBB LEADERBOARD
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mlbbPlayers.map((player) => (
              /* Class 'hover-rgb' di bawah ini yang bikin kelap-kelip RGB pas kursor diarahkan ke card */
              <div key={player.id} className="bg-black rounded-xl p-5 border border-slate-800 transition-all duration-300 hover-rgb relative overflow-hidden group cursor-pointer shadow-lg">
                <div className="absolute top-0 right-0 bg-slate-800 group-hover:bg-white text-gray-300 group-hover:text-black transition-colors font-mono font-bold px-3 py-1 rounded-bl-lg text-xs tracking-wider z-10">{player.role}</div>
                <div className="flex items-center space-x-4 relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={player.img} alt={player.nama} className="w-16 h-16 rounded-full border-2 border-slate-700 group-hover:border-transparent bg-slate-800" />
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:tracking-wide transition-all">{player.nama}</h3>
                    <p className="text-cyan-400 text-sm font-semibold">{player.rank}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 relative z-10">
                  <p className="text-xs text-gray-500 uppercase font-mono">Signature Hero</p>
                  <p className="text-gray-300 font-medium">{player.favHero}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Divisi Multi-Gaming */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full animate-pulse"></span>
            DIVISI MULTI-GAMING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPlayers.map((player) => (
              <div key={player.id} className="bg-black rounded-xl p-5 border border-slate-800 hover-rgb transition-all flex items-center space-x-4 cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={player.img} alt={player.nama} className="w-16 h-16 rounded-full border-2 border-slate-700 bg-slate-800" />
                <div>
                  <h3 className="text-xl font-bold text-white">{player.nama}</h3>
                  <p className="text-gray-400 text-sm font-mono mt-1">GAME: <span className="text-purple-400">{player.game}</span></p>
                  <p className="text-gray-400 text-sm font-mono">RANK: <span className="text-white">{player.rank}</span></p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}