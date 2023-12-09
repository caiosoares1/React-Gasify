// import { Poppins } from 'next/font/google'
import './globals.css'

// const poppins = Poppins({style: 'normal', weight: '400', preload: false, display: 'swap', serif: false})

export const metadata = {
  title: 'Gasify',
  description: 'Gasify - A plataforma de gestão de combustível para o seu negócio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* {metadata.title && <title>{metadata.title}</title>} */}
      </head>
      <body className="poppins">{children}</body>
    </html>
  )
}


