import { Signika, Signika_Negative } from 'next/font/google'
import './globals.css'
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from '@/components/providers/Providers';
import { siteConfig } from '@/lib/const';

const signika = Signika_Negative({ subsets: ['latin'], variable: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={signika.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
