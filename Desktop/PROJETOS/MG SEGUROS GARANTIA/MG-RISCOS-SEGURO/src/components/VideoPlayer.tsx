import React from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

function getYouTubeEmbedUrl(url: string) {
  const match = url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0&showinfo=0&autoplay=0` : null;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, title }) => {
  const youtubeEmbed = getYouTubeEmbedUrl(src);

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-video bg-black">
      {/* Selo no canto */}
      <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
        <span role="img" aria-label="Lei">🛡️</span> Lei 14.133/21 Aplicada
      </div>
      {youtubeEmbed ? (
        <iframe
          src={youtubeEmbed}
          title={title || 'Vídeo'}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
          style={{ borderRadius: '1rem', minHeight: 0 }}
        />
      ) : (
        <video
          className="w-full h-full object-cover"
          controls
          poster={poster}
          preload="none"
          title={title}
          style={{ borderRadius: '1rem' }}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer; 