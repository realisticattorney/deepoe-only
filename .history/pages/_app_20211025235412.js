import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  
  
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopProvider>
  );
}
export default MyApp;
