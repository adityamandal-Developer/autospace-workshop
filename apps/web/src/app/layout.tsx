import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto space',
  description: 'Auto space',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ApolloProvider>
        <body className={inter.className}>{children}</body>
      </ApolloProvider>
    </html>
  )
}
