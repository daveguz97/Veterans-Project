import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.scss'

const lato = Lato({
	weight: ['400'],
	subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Veteran Staffing Network | Pendleton, IN',
//  TODO: Add a better Metadata description 
  description: 'A staffing network for veterans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
