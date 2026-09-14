"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface GameState {
  y: number;
  vy: number;
  jumping: boolean;
  running: boolean;
  over: boolean;
  obstacles: Array<{ x: number; w: number; h: number }>;
  score: number;
  speed: number;
}

const W = 560;
const H = 180;
const GROUND = 130;

function makeState(): GameState {
  return {
    y: GROUND,
    vy: 0,
    jumping: false,
    running: false,
    over: false,
    obstacles: [{ x: W, w: 14, h: 30 }],
    score: 0,
    speed: 5,
  };
}

export default function DinoGame({ open, onClose }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(makeState());
  const rafRef = useRef<number | null>(null);
  const [hint, setHint] = useState("Press Space or click the game to start");

  const jump = () => {
    const s = stateRef.current;
    if (s.over) {
      stateRef.current = makeState();
      setHint("Press Space or click the game to start");
      return;
    }
    if (!s.running) {
      s.running = true;
      setHint("");
    }
    if (!s.jumping) {
      s.jumping = true;
      s.vy = -11;
    }
  };

  useEffect(() => {
    if (!open) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    stateRef.current = makeState();
    setHint("Press Space or click the game to start");

    const tick = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const s = stateRef.current;

      ctx.clearRect(0, 0, W, H);

      // ground
      ctx.fillStyle = "#2d2d2d";
      ctx.fillRect(0, 160, W, 2);

      // dino (blue rect)
      ctx.fillStyle = "#3b8eea";
      ctx.fillRect(40, s.y, 26, 30);

      // obstacles (pink)
      ctx.fillStyle = "#e93cac";
      s.obstacles.forEach((o) => ctx.fillRect(o.x, 160 - o.h, o.w, o.h));

      // score
      ctx.fillStyle = "#d4d4d4";
      ctx.font = "12px monospace";
      ctx.fillText(`Score: ${Math.floor(s.score)}`, W - 90, 20);

      if (s.running && !s.over) {
        s.vy += 0.7;
        s.y += s.vy;
        if (s.y > GROUND) {
          s.y = GROUND;
          s.vy = 0;
          s.jumping = false;
        }

        s.obstacles.forEach((o) => (o.x -= s.speed));

        // spawn new obstacle
        const last = s.obstacles[s.obstacles.length - 1];
        if (last.x < W - (180 + Math.random() * 120)) {
          s.obstacles.push({
            x: W,
            w: 12 + Math.random() * 10,
            h: 24 + Math.random() * 20,
          });
        }

        s.obstacles = s.obstacles.filter((o) => o.x > -20);
        s.score += 0.15;
        s.speed = 5 + s.score / 200;

        // collision
        for (const o of s.obstacles) {
          if (40 + 26 > o.x && 40 < o.x + o.w && s.y + 30 > 160 - o.h) {
            s.over = true;
            s.running = false;
          }
        }
      }

      if (s.over) {
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 14px monospace";
        ctx.fillText("Game Over — click or Space to retry", 110, 88);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/55"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="rounded-lg border border-vsc-line bg-vsc-elevated p-[18px] shadow-2xl">
        <div className="mb-2.5 flex items-center justify-between text-[12.5px] text-vsc-text">
          <span>🦖 Portfolio Runner — Space / Click to jump</span>
          <button
            onClick={onClose}
            className="ml-4 text-[15px] text-vsc-muted hover:text-white"
          >
            ✕
          </button>
        </div>
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          onClick={jump}
          className="block max-w-full cursor-pointer rounded border border-vsc-line"
          style={{ background: "#101010" }}
        />
        <div className="mt-2 text-center text-[11px] text-vsc-muted">
          {hint}
        </div>
      </div>
    </div>
  );
}
