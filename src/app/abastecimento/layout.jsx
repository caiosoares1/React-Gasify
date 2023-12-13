import { Footer } from '@/components/images';
import Header from '@/components/header';
import CompatibilityComponent from '@/components/compatibility';
import NavAbastecimento from '@/components/forms/NavAbastecimento';
import { AbastecimentoProvider } from '@/contexts/AbastecimentoContext';

export default function AbastecimentoLayout({ children }) {
    return (
      <html lang="pt-br">
        {/* <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          {metadata.title && <title>{metadata.title}</title>}
        </head> */}
        <body>
        <AbastecimentoProvider>
          <Header />
          <CompatibilityComponent />
          <NavAbastecimento />

            {children}

          <footer>
            <Footer />
          </footer>
        </ AbastecimentoProvider>
        </body>
      </html>
    )
  }