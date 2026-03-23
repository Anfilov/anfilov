"use client";

import { useRef, useCallback } from "react";

interface Props {
  src: string;
  poster?: string;
  loop?: boolean;
  alt?: string;
}

/** Hero video that auto-plays once and restarts on hover. */
export function SluzbaHeroVideo({ src, poster, loop = false, alt = "Video" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // Restart and play
    video.currentTime = 0;
    video.play().catch(() => {});
  }, []);

  return (
    <div
      className="relative order-1 lg:order-2 flex items-center justify-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      style={{
        maskImage: "radial-gradient(circle closest-side at center, black 80%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle closest-side at center, black 80%, transparent 100%)",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop={loop}
        playsInline
        preload="auto"
        aria-label={alt}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: 560,
          objectFit: "contain",
        }}
      />
    </div>
  );
}
