import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext'; // Import AuthProvider
import { CartProvider } from '../contexts/CartContext'; // Import CartProvider

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
