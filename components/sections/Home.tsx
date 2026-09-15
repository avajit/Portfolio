"use client";

import React, { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const roleConfigs = useMemo(() => [
    { title: 'Software Engineer', color: 'text-sky-400', dot: 'bg-sky-400', cursor: 'bg-sky-400' },
    { title: 'MERN Stack Developer', color: 'text-emerald-400', dot: 'bg-emerald-400', cursor: 'bg-emerald-400' },
    { title: 'Full-Stack Developer', color: 'text-violet-400', dot: 'bg-violet-400', cursor: 'bg-violet-400' },
    { title: 'Backend Developer', color: 'text-amber-400', dot: 'bg-amber-400', cursor: 'bg-amber-400' },
    { title: 'Frontend Developer', color: 'text-cyan-400', dot: 'bg-cyan-400', cursor: 'bg-cyan-400' },
    { title: 'Web Developer', color: 'text-teal-400', dot: 'bg-teal-400', cursor: 'bg-teal-400' },
    { title: 'IEEE Published Author', color: 'text-pink-400', dot: 'bg-pink-400', cursor: 'bg-pink-400' }
  ], []);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roleConfigs[currentRoleIndex].title;
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 50;
    }

    if (!isDeleting && typedText === fullText) {
      typingSpeed = 2000; // Pause at the end
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roleConfigs.length);
      typingSpeed = 500; // Pause before typing next word
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
        if (typedText === fullText) {
          setIsDeleting(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex, roleConfigs]);

  const terminalConfigs = useMemo(() => [
    "hello world !!",
    "welcome to my portfolio"
  ], []);

  const [currentTerminalIndex, setCurrentTerminalIndex] = useState(0);
  const [terminalTypedText, setTerminalTypedText] = useState("");
  const [isTerminalDeleting, setIsTerminalDeleting] = useState(false);

  useEffect(() => {
    const fullText = terminalConfigs[currentTerminalIndex];
    let typingSpeed = 100;

    if (isTerminalDeleting) {
      typingSpeed = 50;
    }

    if (!isTerminalDeleting && terminalTypedText === fullText) {
      typingSpeed = 2000;
    } else if (isTerminalDeleting && terminalTypedText === "") {
      setIsTerminalDeleting(false);
      setCurrentTerminalIndex((prev) => (prev + 1) % terminalConfigs.length);
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      if (isTerminalDeleting) {
        setTerminalTypedText(fullText.substring(0, terminalTypedText.length - 1));
      } else {
        setTerminalTypedText(fullText.substring(0, terminalTypedText.length + 1));
        if (terminalTypedText === fullText) {
          setIsTerminalDeleting(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [terminalTypedText, isTerminalDeleting, currentTerminalIndex, terminalConfigs]);

  const currentConfig = roleConfigs[currentRoleIndex];

  return (
    <div className="relative w-full min-h-full lg:min-h-[calc(100dvh-42px)] lg:max-h-[calc(100dvh-42px)] bg-[#121214] text-zinc-100 flex flex-col justify-between overflow-x-hidden overflow-y-visible lg:overflow-y-hidden select-none font-sans pb-6 lg:pb-0">

      {/* 1. Ambient Background Backlight (Desktop & Tablet) */}
      <div className="hidden md:block absolute top-1/4 right-0 w-[450px] lg:w-[550px] h-[450px] lg:h-[550px] bg-gradient-to-br from-pink-500/15 via-purple-600/10 to-transparent rounded-full blur-[120px] lg:blur-[140px] pointer-events-none" />

      {/* 2. Main Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 w-full items-stretch relative z-10 overflow-hidden">

        {/* LEFT COLUMN: Narrative & Controls */}
        <div className="lg:col-span-7 flex flex-col justify-start px-4 pt-8 sm:pt-10 lg:pt-12 pb-5 sm:px-8 md:px-12 lg:pl-16 lg:pr-6 overflow-y-visible lg:overflow-y-auto">

          <div className="font-mono text-[10px] sm:text-xs tracking-tight sm:tracking-wide flex items-center gap-1 sm:gap-1.5 select-none mb-4 whitespace-nowrap">
            <span className="text-zinc-600 font-semibold">//</span>
            <span className="text-emerald-400 font-medium">printf(</span>
            <span className="text-amber-300">"{terminalTypedText}"</span>
            <span className="text-emerald-400 font-medium">);</span>
            <span className="w-1.5 h-3.5 bg-zinc-500 animate-[blink_1s_step-end_infinite]" />
          </div>

          {/* Dynamic Headline */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.12)]">
              Avajit Kumar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_24px_rgba(236,72,153,0.35)] font-black">
                Kewrat
              </span>
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-pink-500 rounded-full mt-2 sm:mt-3" />
          </div>

          {/* Typewriter Badge */}
          <div className="flex items-center gap-2 font-mono text-sm sm:text-base min-h-[28px] select-none mb-5">
            <span className={`w-2 h-2 rounded-full ${currentConfig.dot} animate-pulse shrink-0`} />
            <span className={`font-semibold ${currentConfig.color} tracking-wide`}>
              {typedText}
            </span>
            <span className={`inline-block w-2 h-4 sm:h-5 ${currentConfig.cursor} animate-pulse`} />
          </div>

          {/* MOBILE ONLY: Grounded Portrait Between Badges & Bio */}
          <div className="lg:hidden relative w-full flex justify-center items-center my-2 sm:my-4">
            {/* Ambient mobile halo */}
            <div className="absolute inset-0 bg-pink-500/15 rounded-full blur-2xl scale-75 pointer-events-none" />

            <div className="relative w-full max-w-[260px] sm:max-w-[300px] h-52 sm:h-64 flex justify-center items-start overflow-hidden mx-auto">
              <div
                className="relative z-10 w-full h-full"
                style={{
                  WebkitMaskImage: 'radial-gradient(closest-side, black 50%, transparent 100%)',
                  maskImage: 'radial-gradient(closest-side, black 50%, transparent 100%)'
                }}
              >
                <div className="w-full h-full">
                  <img
                    src="/profile_img.png"
                    alt="Avajit Kumar Kewrat"
                    className="w-full h-full object-contain object-top filter brightness-[0.90] contrast-[0.96] saturate-[0.88]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-6">
            I craft high-performance, resilient web applications at the intersection of <span className="text-blue-400 font-semibold">full-stack engineering</span>, <span className="text-pink-400 font-semibold">secure authentication systems</span>, and <span className="text-blue-400 font-semibold">scalable backend architecture</span>. Focused on turning complex problems into fast, production-grade systems.
          </p>

          {/* Action CTAs: Streamlined 2-Button Action Row */}
          <div className="flex flex-wrap items-center gap-3 select-none mt-2">
            {/* Primary Button */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-150 shadow-md shadow-blue-600/20 hover:shadow-blue-500/30"
            >
              <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>View Projects</span>
              <span className="text-blue-300 transition-transform duration-150 group-hover:translate-x-1">→</span>
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-150 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Get in Touch</span>
            </a>
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
                // Start pure transparent for the first 5% to erase the line, then quickly become opaque so the shoulder remains solid.
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 5%, black 20%, black 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, transparent 5%, black 20%, black 100%)'
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

    </div>
  );
}
