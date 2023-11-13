import { Inter } from 'next/font/google'
//import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '@/componentes/menu';
import Footer from '@/componentes/footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Noticias</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"/>
      </head>

      <body className={inter.className}>
        <div className='container-fluid'>
          <header>
            <Menu></Menu>
          </header>
          <section className='container'>
            {children}
          </section>
          <Footer></Footer>
        </div>
        
        </body>
    </html>
  )
}
