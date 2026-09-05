import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
    const filePath = path.join(dataDir, 'submissions.json')
    let submissions: any[] = []
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8')
      submissions = raw ? JSON.parse(raw) : []
    }
    const entry = { ...body, receivedAt: new Date().toISOString() }
    submissions.push(entry)
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
