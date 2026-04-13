"use client";
import { useState, useRef, useEffect } from "react";

const songs = [
  { title: "Ek Pyaar Ka Nagma Hai", file: "/music/ek-pyaar-ka-nagma.mp3" },
  { title: "Yeh Ratein Yeh Mausam", file: "/music/yeh-ratein-yeh-mausam.mp3" },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // Autoplay on first user interaction (click/scroll/keypress)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const autoplay = () => {
      audio.currentTime = 49;
      audio.play().then(() => setPlaying(true)).catch(() => {});
      window.removeEventListener("click", autoplay);
      window.removeEventListener("scroll", autoplay);
      window.removeEventListener("keydown", autoplay);
      window.removeEventListener("touchstart", autoplay);
    };

    window.addEventListener("click", autoplay, { once: true });
    window.addEventListener("scroll", autoplay, { once: true });
    window.addEventListener("keydown", autoplay, { once: true });
    window.addEventListener("touchstart", autoplay, { once: true });

    return () => {
      window.removeEventListener("click", autoplay);
      window.removeEventListener("scroll", autoplay);
      window.removeEventListener("keydown", autoplay);
      window.removeEventListener("touchstart", autoplay);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnd = () => {
      const next = (currentSong + 1) % songs.length;
      setCurrentSong(next);
      audio.src = songs[next].file;
      audio.play();
    };

    audio.addEventListener("ended", handleEnd);
    return () => audio.removeEventListener("ended", handleEnd);
  }, [currentSong]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  }

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <audio ref={audioRef} src={songs[currentSong].file} preload="none" />

      {expanded && (
        <div className="mb-3 bg-white rounded-2xl shadow-lg border border-gold-light/30 p-4 min-w-[220px]">
          <p className="text-xs text-text-muted mb-1">Now Playing</p>
          <p className="text-sm font-semibold text-text-dark truncate">
            🎵 {songs[currentSong].title}
          </p>
          <div className="flex gap-2 mt-3">
            {songs.map((song, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentSong(i);
                  if (audioRef.current) {
                    audioRef.current.src = song.file;
                    if (playing) audioRef.current.play();
                  }
                }}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  i === currentSong
                    ? "bg-gold text-white"
                    : "bg-cream text-text-muted hover:bg-gold-light/30"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-gold-light/30 flex items-center justify-center text-text-muted hover:text-gold-dark transition-colors text-sm"
          aria-label="Toggle playlist"
        >
          🎶
        </button>
        <button
          onClick={togglePlay}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-xl"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing && (
            <span className="absolute inset-0 rounded-full border-2 border-gold-light" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
          )}
          {playing ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
}
