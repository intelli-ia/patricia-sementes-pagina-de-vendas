'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface VideoPlayerProps {
  src: string;
  /** Texto do chamado exibido sobre o vídeo pausado. */
  label?: string;
  className?: string;
}

/**
 * Vídeo com chamada para o play, sem controles nativos. Enquanto pausado, um
 * botão pulsante cobre o quadro; ao tocar, ele some e um toque no vídeo pausa.
 */
export function VideoPlayer({ src, label = 'Assista', className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(true);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* #t=0.1 faz o navegador exibir um quadro como capa, sem poster separado. */}
      <video
        ref={videoRef}
        src={`${src}#t=0.1`}
        playsInline
        preload="metadata"
        onClick={() => videoRef.current?.pause()}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        onEnded={() => setPaused(true)}
        className="h-full w-full cursor-pointer object-cover"
      />

      {paused && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          aria-label={`${label} o vídeo`}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/35 transition-colors hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="relative flex h-20 w-20 items-center justify-center">
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-primary/50 motion-reduce:hidden"
            />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-background shadow-xl transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-8 w-8 fill-current" aria-hidden />
            </span>
          </span>
          <span className="rounded-full bg-black/60 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-white">
            {label}
          </span>
        </button>
      )}
    </div>
  );
}

export default VideoPlayer;
