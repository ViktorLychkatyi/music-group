import React, {useState, useEffect, useRef} from "react";
import { tracks } from "../../../data/tracks.js";

function Player() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const isDragging = useRef(false);
  
  useEffect(() => {
    audioRef.current = new Audio(tracks[trackIndex].src);

    const updateProgress = () => {
      console.log("компонент смотирован ");
      if (audioRef.current && !isDragging.current) {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setTrackProgress(progress || 0);
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      console.log("компонент размотирован");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [trackIndex]);

  const handlePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    }
    else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    audioRef.current.pause();
    const nextIndex = (trackIndex + 1) % tracks.length;
    setTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    audioRef.current.pause();
    const prevIndex = (trackIndex - 1 + tracks.length) % tracks.length;
    setTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [trackIndex, isPlaying]);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = (event) => {
    if (isDragging.current) {
      isDragging.current = false;

      const rect = progressRef.current.getBoundingClientRect();
      const newTime = ((event.clientX - rect.left) / rect.width) * audioRef.current.duration;
      audioRef.current.currentTime = Math.max(0, Math.min(newTime, audioRef.current.duration));
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const progress = Math.max(0, Math.min((offsetX / rect.width) * 100, 100));
      setTrackProgress(progress);
    }
  };

  return (
      <div id={"listen"}>
        <h1 className={"title_info"}>ПОСЛУШАТЬ МОЖНО ЗДЕСЬ</h1>
        <div className="player" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          <h2>{tracks[trackIndex].name}</h2>
          <div className="player_buttons">
            <button onClick={handlePrev}>
              <img src="./img/iconoir_skip-prev-solid.svg" alt="Previous" />
            </button>
            <button onClick={handlePlay}>
              <img src={isPlaying? "./img/mingcute_pause-line.svg": "./img/line-md_play-filled.svg"} alt={isPlaying? "Pause": "Play"}/>
            </button>
            <button onClick={handleNext}>
              <img src="./img/iconoir_skip-next-solid.svg" alt="Next" />
            </button>
          </div>

          <div className="player_progress" ref={progressRef}>
            <div className="circle" style={{ left: `${trackProgress}%` }} onMouseDown={handleMouseDown}></div>
          </div>
        </div>
      </div>
  );
}

export default Player;