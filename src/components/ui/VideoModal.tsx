import { useEffect } from 'react'
import { X } from 'lucide-react'

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

  // Convert Drive URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com/file/d/')) {
      const match = url.match(/\/file\/d\/([^\/]+)/)
      if (match) {
        return `https://drive.google.com/file/d/${match[1]}/preview`
      }
    }
    return url
  }

  const embedUrl = getEmbedUrl(videoUrl)

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