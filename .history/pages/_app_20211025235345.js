import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';

function MyApp({ Component, pageProps }) {
  return (
    <
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ ShopProvider
  );
}
export default MyApp;
