import { Footer } from '@/components/images';
import Header from '@/components/header';
import CompatibilityComponent from '@/components/compatibility';
import NavAbastecimento from '@/components/forms/NavAbastecimento';
import { AbastecimentoProvider } from '@/contexts/AbastecimentoContext';

export default function AbastecimentoLayout({ children }) {
    return (
      <html lang="pt-br">
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