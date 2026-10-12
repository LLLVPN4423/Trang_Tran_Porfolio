/** Extract Google Drive file id from share / view URLs. */
export function getGoogleDriveFileId(url: string): string | null {
  const fileMatch = url.match(/\/file\/d\/([^/?]+)/)
  if (fileMatch) return fileMatch[1]
  const idParam = url.match(/[?&]id=([^&]+)/)
  return idParam ? idParam[1] : null
}

export function googleDriveViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
}

export function googleDrivePreviewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/preview`
}

/** Static thumbnail frame from Drive (works for many publicly shared videos). */
export function googleDriveThumbnailUrl(fileId: string, width = 900): string {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`
}

export function toGoogleDriveEmbedUrl(url: string): string {
  const id = getGoogleDriveFileId(url)
  if (id) return googleDrivePreviewUrl(id)
  return url
}
