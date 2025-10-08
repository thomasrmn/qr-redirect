import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = { matcher: ['/qr'] }

export default async function middleware(_req: NextRequest) {
  const target = (await get<string>('qr_url')) || 'https://helpytravel.com'
  const res = NextResponse.redirect(target, 302)
  res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
  res.headers.set('Pragma', 'no-cache')
  return res
}
