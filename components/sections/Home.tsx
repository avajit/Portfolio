import React from 'react';

export default function Home() {
  return (
    <div className="relative w-full min-h-[calc(100dvh-42px)] max-h-[calc(100dvh-42px)] bg-[#121214] text-zinc-100 flex flex-col justify-between overflow-x-hidden overflow-y-hidden select-none font-sans">
      
      {/* 1. Ambient Background Backlight (Desktop & Tablet) */}
      <div className="hidden md:block absolute top-1/4 right-0 w-[450px] lg:w-[550px] h-[450px] lg:h-[550px] bg-gradient-to-br from-pink-500/15 via-purple-600/10 to-transparent rounded-full blur-[120px] lg:blur-[140px] pointer-events-none" />

      {/* 2. Main Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 w-full items-stretch relative z-10 overflow-hidden">
        
        {/* LEFT COLUMN: Narrative & Controls */}
        <div className="lg:col-span-7 flex flex-col justify-center px-4 py-5 sm:px-8 md:px-12 lg:pl-16 lg:pr-6 space-y-4 sm:space-y-5 lg:space-y-6 overflow-y-auto">
          
          {/* Terminal Intro Line */}
          <div className="font-mono text-[11px] sm:text-xs text-emerald-400 tracking-tight">
            // hello world !! Welcome to my portfolio
          </div>

          {/* Dynamic Headline */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Avajit Kumar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                Kewrat
              </span>
              <span className="inline-block w-2 sm:w-2.5 h-[0.75em] bg-pink-500 ml-1.5 sm:ml-2 animate-pulse align-baseline" />
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-pink-500 rounded-full mt-2 sm:mt-3" />
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono">
            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Full-Stack Developer
            </span>
            <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-300">
              Published Researcher
            </span>
          </div>

          {/* MOBILE ONLY: Grounded Portrait Between Badges & Bio */}
          <div className="lg:hidden relative w-full flex justify-center items-center my-1 sm:my-2">
            {/* Ambient mobile halo */}
            <div className="absolute inset-0 bg-pink-500/15 rounded-full blur-2xl scale-75 pointer-events-none" />

            <div className="relative w-full max-w-[280px] sm:max-w-xs h-64 sm:h-72 flex justify-center items-start overflow-hidden">
              <div 
                className="relative z-10 w-full h-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 35%, black 100%)',
                  maskImage: 'linear-gradient(to top, transparent 0%, black 35%, black 100%)'
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 5%, black 25%, black 75%, transparent 95%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, transparent 5%, black 25%, black 75%, transparent 95%, transparent 100%)'
                  }}
                >
                  <img 
                    src="/profile_img.png" 
                    alt="Avajit Kumar Kewrat" 
                    className="w-full h-full object-cover object-top filter brightness-[0.90] contrast-[0.96] saturate-[0.88]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
            I live at the crossroads of <span className="text-blue-400 font-semibold">full-stack engineering</span>, <span className="text-pink-400 font-semibold">secure authentication systems</span>, and <span className="text-blue-400 font-semibold">scalable backend architecture</span>. I build SaaS systems that are genuinely fast, secure, and production-ready.
          </p>

          {/* Action CTAs: Responsive Grid on Mobile, Flex on Larger Screens */}
          <div className="grid grid-cols-3 gap-2 pt-1 sm:flex sm:flex-wrap sm:gap-3">
            <button className="py-2.5 px-2 sm:px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] sm:text-sm font-semibold shadow-lg shadow-blue-600/25 flex items-center justify-center gap-1.5 transition active:scale-95 whitespace-nowrap">
              <span>📁</span> Projects
            </button>
            <button className="py-2.5 px-2 sm:px-5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-[11px] sm:text-sm font-medium flex items-center justify-center gap-1.5 transition active:scale-95 whitespace-nowrap">
              <span>👤</span> About Me
            </button>
            <button className="py-2.5 px-2 sm:px-5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-[11px] sm:text-sm font-medium flex items-center justify-center gap-1.5 transition active:scale-95 whitespace-nowrap">
              <span>✉️</span> Contact
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Desktop Only Full-Bleed Portrait */}
        <div className="hidden lg:flex lg:col-span-5 relative w-full h-full min-h-[500px] items-end justify-end p-0 m-0 overflow-hidden bg-transparent">
          
          {/* Multi-Directional Gradient Mask: Nested to avoid browser maskComposite bugs */}
          <div 
            className="w-full h-full relative z-10 flex items-end justify-end"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 5%, black 25%, black 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, transparent 5%, black 25%, black 100%)'
            }}
          >
            <div
              className="w-full h-full"
              style={{
                // Start pure transparent exactly at the edge, fading gently to black so the arm remains visible and no hard boundary exists.
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)'
              }}
            >
              <img 
                src="/profile_img.png" 
                alt="Avajit Kumar Kewrat" 
                className="w-full h-full object-cover object-top filter brightness-[0.90] contrast-[0.96] saturate-[0.88]"
              />
            </div>
          </div>

        </div>

      </div>

      {/* 3. Universal Bottom Metrics Dock */}
      <div className="relative z-30 px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 border-t border-zinc-800/80 bg-[#121214]/95 backdrop-blur-md shrink-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-5xl">
          {[
            { val: '4+', label: 'PROJECTS' },
            { val: '200+', label: 'DSA SOLVED' },
            { val: '1', label: 'IEEE PAPER' },
            { val: '8.01', label: 'CGPA' },
          ].map((stat, idx) => (
            <div key={idx} className="p-2.5 sm:p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 text-center hover:border-pink-500/30 transition">
              <div className="text-lg sm:text-2xl font-extrabold text-white font-mono tracking-tight">{stat.val}</div>
              <div className="text-[9px] sm:text-[10px] text-zinc-400 font-mono tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
