import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TwitterClone',
  description: 'Clone from Twitter'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
