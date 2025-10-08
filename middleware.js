import { NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export const config = { matcher: ['/qr'] }

export default async function middleware() {
  const target = (await get('qr_url')) || 'https://helpytravel.com'
  const res = NextResponse.redirect(target, 302)
  res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
  res.headers.set('Pragma', 'no-cache')
  return res
}
