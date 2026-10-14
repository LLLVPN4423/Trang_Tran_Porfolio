import fs from 'fs'

const html = fs.readFileSync('tmp-folder.html', 'utf8')
const re = /ssk='5:auSv137:([a-zA-Z0-9_-]+)-0-1'/g
const rows = []
let m
while ((m = re.exec(html))) {
  const id = m[1]
  const before = html.slice(Math.max(0, m.index - 2500), m.index)
  const nameMatch = before.match(/>([^<]{3,120}\.(?:MOV|mov|MP4|mp4))</)
  rows.push({ id, name: nameMatch ? nameMatch[1] : '?' })
}

const seen = new Set()
for (const r of rows) {
  if (seen.has(r.id)) continue
  seen.add(r.id)
  console.log(`${r.id}\t${r.name}`)
}
console.log('total unique', seen.size)
