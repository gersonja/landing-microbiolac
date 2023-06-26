import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Laboratorio de Análisis Clínicos Microbiolac',
  description: 'Laboratoiro de Análisis Clínicos Microbiolac, hematología, quími sanguínea, pruebas hormonales, marcadores tumorales, uroanálisis, coproanálisis.  Ibarra, Ecuador',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
