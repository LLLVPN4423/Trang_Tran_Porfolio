import { useCallback, useState } from 'react'
import { Play } from 'lucide-react'
import {
  getGoogleDriveFileId,
  googleDrivePreviewUrl,
  googleDriveThumbnailUrl,
} from '../../lib/googleDrive'

interface DriveVideoPreviewProps {
  videoUrl: string
  alt: string
  /** Local path thumbnail overrides Drive thumbnail */
  localThumbnail?: string | null
  className?: string
}

export function DriveVideoPreview({ videoUrl, alt, localThumbnail, className = '' }: DriveVideoPreviewProps) {
  const fileId = getGoogleDriveFileId(videoUrl)
  const [thumbFailed, setThumbFailed] = useState(false)
  const [previewReady, setPreviewReady] = useState(false)
  const [loadPreview, setLoadPreview] = useState(false)

  const thumbSrc =
    localThumbnail ??
    (fileId && !thumbFailed ? googleDriveThumbnailUrl(fileId, 960) : null)

  const onEnter = useCallback(() => {
    if (fileId) setLoadPreview(true)
  }, [fileId])

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-zinc-900 ${className}`}
      onMouseEnter={onEnter}
      onFocus={onEnter}
    >
      {fileId && loadPreview && (
        <iframe
          src={googleDrivePreviewUrl(fileId)}
          title={alt}
          className={`pointer-events-none absolute inset-0 h-full w-full scale-[1.35] border-0 transition-opacity duration-500 ${
            previewReady ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          allow="autoplay; encrypted-media"
          onLoad={() => setPreviewReady(true)}
        />
      )}

      {thumbSrc ? (
        <img
          src={thumbSrc}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            previewReady && loadPreview ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
          onError={() => setThumbFailed(true)}
        />
      ) : (
        !loadPreview && (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950" />
        )
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/20" />

      <div className="absolute inset-0 flex items-center justify-center opacity-70 transition-opacity duration-300 group-hover:opacity-100">
        <div className="rounded-full border border-zinc-600/50 bg-zinc-950/50 p-4 backdrop-blur-md">
          <Play size={28} className="ml-0.5 text-zinc-100" fill="currentColor" />
        </div>
      </div>
    </div>
  )
}
