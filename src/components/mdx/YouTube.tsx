interface YouTubeProps {
  url: string;
  title?: string;
  className?: string;
}

export function YouTube({ url, title, className }: YouTubeProps) {
  // YouTube URL에서 video ID 추출
  const getVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // 시작 시간 추출 (t= 파라미터)
  const getStartTime = (url: string): string => {
    const timeMatch = url.match(/[?&]t=(\d+)/);
    if (timeMatch) {
      return `&start=${timeMatch[1]}`;
    }
    return '';
  };

  const videoId = getVideoId(url);

  if (!videoId) {
    return (
      <div className='border-destructive/50 bg-destructive/10 rounded-md border p-4 text-destructive'>
        Invalid YouTube URL: {url}
      </div>
    );
  }

  const startTime = getStartTime(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0${startTime}`;

  return (
    <div className={`my-6 ${className || ''}`}>
      <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
        <iframe
          src={embedUrl}
          title={title || 'YouTube video'}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
          className='absolute inset-0 h-full w-full'
        />
      </div>
      {title && <p className='mt-2 text-center text-sm text-muted-foreground'>{title}</p>}
    </div>
  );
}
