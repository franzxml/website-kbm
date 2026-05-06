"use client";
import React, { useState } from 'react';
import { membersData, historiData, quotesData, PlayerData } from './data';

export default function GamingPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerData | null>(null);

  const mlbbPlayers = membersData.filter(p => p.game === "MLBB");
  const valoPlayers = membersData.filter(p => p.game === "Valorant");
  const ffPlayers = membersData.filter(p => p.game === "Free Fire");
  const efootballPlayers = membersData.filter(p => p.game === "eFootball");

  const PlayerCard = ({ player, badgeColor }: { player: PlayerData, badgeColor: string }) => (
    <div 
      onClick={() => setSelectedPlayer(player)}
      className="bg-black rounded-xl p-5 border border-slate-800 transition-all duration-300 hover-rgb relative overflow-hidden group cursor-pointer shadow-lg"
    >
      <div className={`absolute top-0 right-0 ${badgeColor} text-black font-mono font-bold px-3 py-1 rounded-bl-lg text-xs tracking-wider z-10`}>
        {player.role}
      </div>
      <div className="flex items-center space-x-4 relative z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={player.img} alt={player.nama} className="w-16 h-16 rounded-full border-2 border-slate-700 group-hover:border-transparent bg-slate-800" />
        <div>
          <h3 className="text-xl font-bold text-white group-hover:tracking-wide transition-all">{player.nama}</h3>
          <p className="text-cyan-400 text-sm font-semibold">{player.rank}</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-800 relative z-10">
        <p className="text-xs text-gray-500 uppercase font-mono">Signature / Andalan</p>
        <p className="text-gray-300 font-medium">{player.favHero}</p>
      </div>
    </div>
  );

  return (
    <main className="bg-[#020617] text-gray-200 min-h-screen pb-20 font-sans relative overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rgb-text { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-rgb-text { background: linear-gradient(270deg, #ff0000, #00ff00, #0000ff, #ff00ff, #ff0000); background-size: 400% 400%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: rgb-text 4s ease infinite; }
        @keyframes rgb-glow { 0% { box-shadow: 0 0 15px #ff0000; border-color: #ff0000; } 33% { box-shadow: 0 0 15px #00ff00; border-color: #00ff00; } 66% { box-shadow: 0 0 15px #0000ff; border-color: #0000ff; } 100% { box-shadow: 0 0 15px #ff0000; border-color: #ff0000; } }
        .hover-rgb:hover { animation: rgb-glow 1.5s linear infinite; transform: translateY(-5px); }
      `}} />

      <header className="text-center py-20 bg-black border-b border-gray-800 relative shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <h1 className="text-5xl md:text-7xl font-bold animate-rgb-text tracking-widest uppercase">KBM GAMING HUB</h1>
        <p className="mt-4 text-gray-500 text-lg uppercase tracking-widest font-mono">Esports Division • Online</p>
      </header>

      <div className="max-w-6xl mx-auto px-4 mt-12 space-y-20">
        
        {/* JADWAL MABAR (YANG SEMPAT HILANG) */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full animate-pulse"></span> STATUS & JADWAL MABAR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Misi Malam Ini</h3>
              <ul className="space-y-3 font-mono">
                <li className="flex justify-between items-center"><span className="text-gray-400">Mobile Legends</span> <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-sm text-sm border border-green-500/50 animate-pulse">Gas 5 Orang</span></li>
                <li className="flex justify-between items-center"><span className="text-gray-400">Valorant</span> <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-sm text-sm border border-yellow-500/50">Butuh 1 Lagi</span></li>
                <li className="flex justify-between items-center"><span className="text-gray-400">Free Fire / eFootball</span> <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-sm text-sm border border-red-500/50">Libur</span></li>
              </ul>
            </div>
            <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Jadwal Rutin KBM</h3>
              <ul className="space-y-3 font-mono text-gray-400">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span> <strong>Jumat Malam:</strong> Full Party MLBB</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span> <strong>Sabtu Sore:</strong> Bebas (Valo/eFootball/FF)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MLBB SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-500 rounded-full animate-pulse"></span> MOBILE LEGENDS (MLBB)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mlbbPlayers.map(player => <PlayerCard key={player.id} player={player} badgeColor="bg-orange-500" />)}
          </div>
        </section>

        {/* VALORANT SECTION */}
        {valoPlayers.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-red-500 rounded-full animate-pulse"></span> VALORANT
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valoPlayers.map(player => <PlayerCard key={player.id} player={player} badgeColor="bg-red-500" />)}
            </div>
          </section>
        )}

        {/* FREE FIRE SECTION */}
        {ffPlayers.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-500 rounded-full animate-pulse"></span> FREE FIRE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ffPlayers.map(player => <PlayerCard key={player.id} player={player} badgeColor="bg-yellow-500" />)}
            </div>
          </section>
        )}

        {/* eFOOTBALL SECTION */}
        {efootballPlayers.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full animate-pulse"></span> eFOOTBALL
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {efootballPlayers.map(player => <PlayerCard key={player.id} player={player} badgeColor="bg-blue-500" />)}
            </div>
          </section>
        )}

        {/* HISTORI GAMING SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-500 rounded-full animate-pulse"></span> HISTORI MATCH KBM
          </h2>
          <div className="bg-black border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            {historiData.map((history, index) => (
              <div key={history.id} className={`p-5 flex justify-between items-center ${index !== historiData.length - 1 ? 'border-b border-slate-800' : ''} hover:bg-slate-900/50 transition-colors`}>
                <div>
                  <h3 className="text-lg font-bold text-white">{history.match}</h3>
                  <p className="text-slate-400 text-sm font-mono mt-1">{history.game} • {history.date}</p>
                </div>
                <div className="text-right">
                  <p className={`text-xl font-bold tracking-widest ${history.result === 'VICTORY' || history.result === 'BOOYAH' ? 'text-green-500' : history.result === 'DEFEAT' ? 'text-red-500' : 'text-gray-400'}`}>
                    {history.result}
                  </p>
                  <p className="text-white font-mono">{history.score}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUOTES KBM SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-pink-500 rounded-full animate-pulse"></span> KATA MEREKA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotesData.map(q => (
              <div key={q.id} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 relative hover:-translate-y-1 transition-transform">
                <span className="text-6xl absolute top-2 left-4 text-slate-700/50 font-serif">&quot;</span>
                <p className="text-gray-300 italic relative z-10 text-lg mt-4 leading-relaxed">
                  {q.quote}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">{q.game}</span>
                  <p className="text-cyan-400 font-bold tracking-wide">— {q.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* POP-UP MODAL TETAP ADA */}
      {selectedPlayer && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPlayer(null)}
        >
          <div 
            className="bg-[#0f172a] border border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] rounded-2xl p-6 max-w-md w-full relative transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedPlayer(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            
            <div className="text-center mb-6 mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedPlayer.img} alt={selectedPlayer.nama} className="w-24 h-24 mx-auto rounded-full border-4 border-cyan-500 mb-4 bg-slate-800 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <h2 className="text-2xl font-bold text-white">{selectedPlayer.nama}</h2>
              <p className="text-cyan-400 font-mono mt-1">{selectedPlayer.game} • {selectedPlayer.rank}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-center">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <p className="text-gray-500 text-xs font-mono mb-1">WIN RATE</p>
                <p className="text-xl font-bold text-green-400">{selectedPlayer.winrate}</p>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <p className="text-gray-500 text-xs font-mono mb-1">MATCHES</p>
                <p className="text-xl font-bold text-white">{selectedPlayer.matches}</p>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-lg border border-slate-800">
              <p className="text-gray-500 text-xs font-mono mb-2">PLAYER BIO</p>
              <p className="text-gray-300 italic">&quot;{selectedPlayer.bio}&quot;</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
