import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const AboutVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className="relative aspect-video w-full">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          alt="Sample Video"
          className="w-full h-full object-cover rounded-lg"
        />

        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-blue-500 hover:bg-blue-600 transition-colors
                     rounded-full p-4 cursor-pointer"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AboutVideo;
