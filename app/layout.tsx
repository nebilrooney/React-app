// app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'My Assignment App',
  description: 'A simple React and Next.js assignment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
        {/* Navigation Bar */}
        <nav style={{
          backgroundColor: '#343a40',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}>
          <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
          <Link href="/features" style={{ color: '#ffffff', textDecoration: 'none' }}>Features</Link>
        </nav>

        {/* Main content */}
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
