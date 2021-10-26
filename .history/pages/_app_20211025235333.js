import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';

function MyApp({ Component, pageProps }) {
  return (
    ShopProvider
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
