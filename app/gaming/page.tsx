"use client";

import { useState } from "react";
import { gameQuotes, matchHistory, players, type Player } from "./data";

type ArcadeGame = {
  title: string;
  desc: string;
  url: string;
};

export default function GamingEditorialPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [playingGame, setPlayingGame] = useState<ArcadeGame | null>(null);

  const mlbbPlayers = players.filter((player) => player.game === "MLBB");
  const valoPlayers = players.filter((player) => player.game === "Valorant");
  const ffPlayers = players.filter((player) => player.game === "Free Fire");
  const efootballPlayers = players.filter((player) => player.game === "eFootball");
  const cocPlayers = players.filter((player) => player.game === "COC");

  const arcadeGames = [
    { title: 'T-Rex Runner', desc: 'Game dinosaurus pas internet mati.', url: 'https://chromedino.com/' },
    { title: 'Flappy Bird', desc: 'Awas banting HP, main santai aja.', url: 'https://flappybird.io/' },
    { title: '2048', desc: 'Game mikir gabut buat nunggu dosen.', url: 'https://play2048.co/' },
    { title: 'Pac-Man', desc: 'Makan kuning-kuning, awas hantu.', url: 'https://freepacman.org/' }
  ];

  const PlayerCard = ({ player }: { player: Player }) => (
    <div 
      onClick={() => setSelectedPlayer(player)}
      className="border border-gray-200 p-4 hover:border-[#FF0000] transition-colors cursor-pointer bg-white relative overflow-hidden group shadow-sm"
    >
      <div className="absolute top-0 right-0 bg-gray-50 border-b border-l border-gray-200 px-2 py-1 text-[10px] font-bold uppercase text-gray-400 tracking-wider group-hover:bg-[#FF0000] group-hover:text-white transition-colors z-10">
        {player.role}
      </div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={player.img} alt="" className="w-12 h-12 rounded-full border border-gray-300 bg-[#fafafa]" />
      </div>
      <h4 className="text-lg font-bold mb-0.5 relative z-10 truncate">{player.nama}</h4>
      <p className="text-xs text-[#FF0000] font-medium mb-3 relative z-10 truncate">{player.rank}</p>
      <div className="pt-3 border-t border-gray-100 flex justify-between text-xs relative z-10">
        <span className="text-gray-500 truncate mr-2">Sign: <span className="font-semibold text-black">{player.favHero}</span></span>
        <span className="font-bold shrink-0">{player.winrate}</span>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden selection:bg-[#FF0000] selection:text-white">
      
      <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-16 border-r border-gray-200 bg-white items-center justify-center z-40">
        <div 
          className="text-gray-400 font-mono text-sm tracking-[0.3em] uppercase whitespace-nowrap transform rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          KBM ESPORTS DIV. // EST 2026
        </div>
      </aside>

      <div className="w-full bg-[#FF0000] text-white py-2 overflow-hidden flex whitespace-nowrap font-mono text-xs uppercase tracking-widest xl:ml-16">
        <div className="animate-marquee inline-block">
          * WARNING: KUMPULAN BEBAN TIM * PUSH RANK SETIAP JUMAT MALAM * JANGAN LUPA BELI WAR * TIKI TAKA HARGA MATI * WARNING: KUMPULAN BEBAN TIM * PUSH RANK SETIAP JUMAT MALAM * JANGAN LUPA BELI WAR * TIKI TAKA HARGA MATI *
        </div>
      </div>

      <div className="xl:ml-16 pb-24">
        
        {/* HEADER DIPERKECIL MAX-WIDTH NYA */}
        <header className="pt-16 pb-12 px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-[#FF0000] mb-6">
                <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><path d="M6 12h4"></path><path d="M8 10v4"></path><circle cx="15" cy="13" r="1" fill="currentColor"></circle><circle cx="18" cy="11" r="1" fill="currentColor"></circle>
              </svg>
              <h1 className="text-5xl lg:text-[6rem] font-bold tracking-tighter text-[#FF0000] leading-[0.85] mb-4">
                KBM<br/>gaming.
              </h1>
            </div>
            <div className="w-full md:w-[350px] text-right border-t border-black pt-4">
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                KBM bisa disebut komunitas, bisa juga disebut tongkrongan. Di dalamnya ada game malam, nugas bareng, pemrograman, dan daftar beban tim.
              </p>
              <div className="font-mono text-xs uppercase text-[#FF0000] font-bold tracking-widest">
                Status: Online
              </div>
            </div>
          </div>
        </header>

        {/* CONTAINER UTAMA DIBIKIN LEBIH RAPAT (MAX-W-6XL & GAP-8) */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16 space-y-20">
          
          {/* 01: MLBB */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 border-t-2 border-[#FF0000] pt-4 flex flex-col">
              <div>
                <p className="text-xs text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF0000] rounded-full"></span> 01 / The Roster
                </p>
                <h2 className="text-4xl font-bold tracking-tight text-black leading-none mb-4">Mobile Legends</h2>
                <p className="text-gray-500 mb-6 max-w-sm text-sm">Daftar pemain inti MLBB KBM. Tukang gendong dan tukang *feed* ada di sini semua.</p>
              </div>
              {/* mt-8 agar gambar nempel ke atas, bukan ke bawah */}
              <div className="relative mt-4 h-48 w-full overflow-hidden group rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pinimg.com/736x/15/89/96/158996c02fa31fa35fb52a05ff20f49f.jpg" alt="Mobile Legends" className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {mlbbPlayers.map(player => <PlayerCard key={player.id} player={player} />)}
            </div>
          </section>

          {/* 02: VALORANT */}
          {valoPlayers.length > 0 && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Order diubah lewat kelas order, bukan flex-row-reverse */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
                {valoPlayers.map(player => <PlayerCard key={player.id} player={player} />)}
              </div>
              <div className="lg:col-span-5 border-t-2 border-black pt-4 order-1 lg:order-2 flex flex-col text-left lg:text-right">
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-3 flex items-center justify-start lg:justify-end gap-2">
                    02 / FPS Division <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight text-black leading-none mb-4">Valorant</h2>
                  <p className="text-gray-500 lg:ml-auto max-w-sm text-sm">Divisi nembak kepala orang. Sayangnya sering bottom frag.</p>
                </div>
                <div className="relative mt-4 h-48 w-full overflow-hidden group rounded-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://teropongmedia.id/wp-content/uploads/2024/02/thumbnail-1.jpg" alt="Valorant" className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
            </section>
          )}

          {/* 03: FREE FIRE */}
          {ffPlayers.length > 0 && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 border-t-2 border-[#FF0000] pt-4 flex flex-col">
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF0000] rounded-full"></span> 03 / Battle Royale
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight text-black leading-none mb-4">Free Fire</h2>
                  <p className="text-gray-500 mb-6 max-w-sm text-sm">Lompat nembak copot pala. Pasukan pantang pulang sebelum booyah.</p>
                </div>
                <div className="relative mt-4 h-48 w-full overflow-hidden group rounded-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn.antaranews.com/cache/1200x800/2022/06/20/Logo-Baru-Free-Fire.jpg" alt="Free Fire" className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {ffPlayers.map(player => <PlayerCard key={player.id} player={player} />)}
              </div>
            </section>
          )}

          {/* 04: eFOOTBALL */}
          {efootballPlayers.length > 0 && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
                {efootballPlayers.map(player => <PlayerCard key={player.id} player={player} />)}
              </div>
              <div className="lg:col-span-5 border-t-2 border-black pt-4 order-1 lg:order-2 flex flex-col text-left lg:text-right">
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-3 flex items-center justify-start lg:justify-end gap-2">
                    04 / Sports Division <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight text-black leading-none mb-4">eFootball</h2>
                  <p className="text-gray-500 lg:ml-auto max-w-sm text-sm">Adu mekanik taktik tiki-taka ala Pep Guardiola versi lite.</p>
                </div>
                <div className="relative mt-4 h-48 w-full overflow-hidden group rounded-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://img.youtube.com/vi/7LH1IvXl6_8/maxresdefault.jpg" alt="eFootball" className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>
            </section>
          )}

          {/* 05: CLASH OF CLANS */}
          {cocPlayers.length > 0 && (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5 border-t-2 border-[#FF0000] pt-4 flex flex-col">
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF0000] rounded-full"></span> 05 / Strategy
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight text-black leading-none mb-4">Clash of Clans</h2>
                  <p className="text-gray-500 mb-6 max-w-sm text-sm">Tukang rampok resources tetangga. Jangan lupa war woi!</p>
                </div>
                <div className="relative mt-4 h-48 w-full overflow-hidden group rounded-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10 pointer-events-none"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://api.duniagames.co.id/optimize-image?url=https%3A%2F%2Fapi.duniagames.co.id%2Fapi%2Fcontent%2Fupload%2Ffile%2F8160707671735288422.jpg&format=webp&width=736&signature=a5bed8d150dddd21a13941e89e87acbbb0ed1cb3f625b9a31eed59913c4233b9" 
                    alt="Clash of Clans" 
                    className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  />
                </div>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {cocPlayers.map(player => <PlayerCard key={player.id} player={player} />)}
              </div>
            </section>
          )}

          {/* 06: KBM ARCADE */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t-4 border-[#FF0000] pt-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-bold tracking-tight text-black leading-none mb-4">KBM<br/>Arcade.</h2>
              <p className="text-gray-500 max-w-sm text-sm">Istirahat dulu dari tugas. Main game langsung di sini tanpa pindah tab.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {arcadeGames.map((game, idx) => (
                <div key={idx} className="border border-gray-200 p-6 flex flex-col justify-between hover:border-[#FF0000] transition-colors bg-white">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{game.title}</h4>
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">{game.desc}</p>
                  </div>
                  <button 
                    onClick={() => setPlayingGame(game)}
                    className="w-full bg-gray-50 border border-gray-200 text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors"
                  >
                    Play Game
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 07 & 08: MATCH HISTORY & QUOTES */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-16 border-t border-gray-200">
            <div className="lg:col-span-7">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-6">07 / Match Log</p>
              <div className="space-y-3">
                {matchHistory.map(h => (
                  <div key={h.id} className="border border-gray-200 p-5 flex justify-between items-center bg-[#fafafa] hover:bg-white transition-colors">
                    <div>
                      <h4 className="text-base font-bold">{h.match}</h4>
                      <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">{h.date} • {h.game}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${h.result === 'VICTORY' ? 'text-green-600' : 'text-[#FF0000]'}`}>{h.result}</p>
                      <p className="text-base font-bold mt-0.5">{h.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-black text-white p-8">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-6 border-b border-gray-700 pb-3">08 / Kata Mereka</p>
              <div className="space-y-8">
                {gameQuotes.map(q => (
                  <div key={q.id}>
                    <p className="text-lg italic text-gray-200 mb-2 font-serif">&quot;{q.quote}&quot;</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#FF0000]">{q.name}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{q.game}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}} />

      {/* MODAL POP-UP: PLAY GAME */}
      {playingGame && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-white/90 backdrop-blur-sm" onClick={() => setPlayingGame(null)}>
          <div className="bg-white w-full max-w-5xl h-[80vh] flex flex-col border border-gray-300 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-[#FF0000] text-white p-1.5 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><path d="M6 12h4"></path><path d="M8 10v4"></path><circle cx="15" cy="13" r="1" fill="currentColor"></circle><circle cx="18" cy="11" r="1" fill="currentColor"></circle></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black uppercase tracking-wide">{playingGame.title}</h3>
                </div>
              </div>
              <button onClick={() => setPlayingGame(null)} className="text-gray-400 hover:text-[#FF0000] font-bold text-xl px-2 transition-colors">✕</button>
            </div>
            <div className="flex-1 bg-[#111] relative p-0.5">
              <iframe src={playingGame.url} className="w-full h-full border-0" title={playingGame.title} sandbox="allow-scripts allow-same-origin"></iframe>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PROFIL PLAYER */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedPlayer(null)}>
          <div className="bg-white p-8 max-w-sm w-full relative shadow-2xl border-t-4 border-[#FF0000]" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedPlayer(null)} className="absolute top-4 right-4 text-gray-400 hover:text-[#FF0000] transition-colors text-lg">✕</button>
            <div className="text-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedPlayer.img} className="w-20 h-20 mx-auto rounded-full border border-gray-200 mb-4 bg-gray-50" alt="" />
              <h2 className="text-xl font-bold mb-1 uppercase tracking-tight">{selectedPlayer.nama}</h2>
              <p className="text-xs text-[#FF0000] font-bold tracking-widest uppercase">{selectedPlayer.game} • {selectedPlayer.rank}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center mb-6 border-y border-gray-100 py-4">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">Win Rate</p>
                <p className="text-lg font-bold">{selectedPlayer.winrate}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1 font-mono">Matches</p>
                <p className="text-lg font-bold">{selectedPlayer.matches}</p>
              </div>
            </div>
            <div className="text-center bg-[#fafafa] p-4 border border-gray-100">
              <p className="text-[10px] text-[#FF0000] font-bold uppercase tracking-widest mb-2">Biography</p>
              <p className="text-xs italic text-gray-700 leading-relaxed">&quot;{selectedPlayer.bio}&quot;</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
