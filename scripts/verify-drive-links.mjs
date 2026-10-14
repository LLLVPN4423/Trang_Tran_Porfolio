import fs from 'fs'

const content = fs.readFileSync('src/data/content.ts', 'utf8')
const re = /id: '(V\d+)'[\s\S]*?externalUrl: 'https:\/\/drive\.google\.com\/file\/d\/([^/]+)\//g
const items = []
let m
while ((m = re.exec(content))) items.push({ id: m[1], fileId: m[2] })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function checkId(fileId) {
  const res = await fetch(`https://drive.google.com/file/d/${fileId}/view`, {
    redirect: 'manual',
    headers: { 'User-Agent': 'Mozilla/5.0' },
  })
  return res.status
}

for (const { id, fileId } of items) {
  await sleep(800)
  const status = await checkId(fileId)
  const ok = status === 200 || status === 302
  console.log(`${ok ? 'OK' : 'BAD'} ${id} ${status} ${fileId}`)
}
