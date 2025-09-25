import { useEffect, useRef, useState } from 'react';

type Props = {
  title: string;
  description?: string;
  poster?: string; // optional poster
  mp4Src: string; // required self-hosted mp4
  webmSrc?: string; // optional webm
  captionSrc?: string; // optional VTT subtitles
  autoPlay?: boolean; // default: false
};

export default function SeoVideo({
  title,
  description,
  poster,
  mp4Src,
  webmSrc,
  captionSrc,
  autoPlay = false,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loadSources, setLoadSources] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadSources(true);
          io.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section aria-label={title} className="py-6 lg:py-8">
      <figure className="w-full max-w-4xl mx-auto">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
          <video
            ref={ref}
            className="absolute inset-0 w-full h-full object-cover"
            poster={poster}
            playsInline
            muted={autoPlay}
            autoPlay={autoPlay}
            controls
            preload="metadata"
            width={1280}
            height={720}
          >
            {loadSources && webmSrc && <source src={webmSrc} type="video/webm" />}
            {loadSources && <source src={mp4Src} type="video/mp4" />}
            {captionSrc && (
              <track kind="subtitles" srcLang="tr" src={captionSrc} label="Türkçe" default />
            )}
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>
        <figcaption className="sr-only">{title} {description}</figcaption>
      </figure>
    </section>
  );
}
