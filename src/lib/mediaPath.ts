/** Encode filename segments for paths with spaces (e.g. Salon Tour1.jpg) */
export function mediaPath(relativePath: string): string {
  if (!relativePath.startsWith('/')) return relativePath
  const segments = relativePath.split('/')
  const file = segments.pop()
  if (!file) return relativePath
  return [...segments, encodeURIComponent(file)].join('/')
}
