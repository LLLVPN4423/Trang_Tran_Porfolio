import { useEffect } from 'react'
import { X } from 'lucide-react'
import { toGoogleDriveEmbedUrl } from '../../lib/googleDrive'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const embedUrl = toGoogleDriveEmbedUrl(videoUrl)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl px-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-4 text-zinc-400 hover:text-zinc-200 transition-colors"
          aria-label="Close"
        >
          <X size={32} />
        </button>
        
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-900">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Video preview"
          />
        </div>
      </div>
    </div>
  )
}