"use client"; // WAJIB ADA karena kita pakai fitur Pop-up (State)
import React, { useState } from 'react';
import { membersData, PlayerData } from './data';

export default function GamingPage() {
  // State untuk nyimpen data player yang lagi diklik buat nampilin pop-up
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerData | null>(null);

  // Misahin data per game
  const mlbbPlayers = membersData.filter(p => p.game === "MLBB");
  const valoPlayers = membersData.filter(p => p.game === "Valorant");
  const ffPlayers = membersData.filter(p => p.game === "Free Fire");
  const efootballPlayers = membersData.filter(p => p.game === "eFootball");

  // Komponen Kartu Player Biar Kodingan Gak Kepanjangan Diulang-ulang
  const PlayerCard = ({ player, badgeColor }: { player: PlayerData, badgeColor: string }) => (
    <div 
      onClick={() => setSelectedPlayer(player)} // Kalau diklik, buka pop-up
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
      
      {/* CSS RGB Text & Hover tetap ada */}
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

      </div>

      {/* POP-UP MODAL (Hanya muncul kalau ada player yang diklik) */}
      {selectedPlayer && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPlayer(null)} // Tutup pop-up kalau area gelap diklik
        >
          <div 
            className="bg-[#0f172a] border border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)] rounded-2xl p-6 max-w-md w-full relative transform transition-all"
            onClick={(e) => e.stopPropagation()} // Biar kalau diklik kartunya nggak ikutan ketutup
          >
            <button 
              onClick={() => setSelectedPlayer(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center"
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
              <p className="text-gray-300 italic">"{selectedPlayer.bio}"</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}