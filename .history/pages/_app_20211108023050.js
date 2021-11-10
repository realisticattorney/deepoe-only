import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';
import { useRouter } from 'next/router';
import ToastContainer from '../components/ToastContainer';
import { ToastProvider } from '../context/ToastContext';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
  
  
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <ToastProvider>
        <ShopProvider>
          <ApolloProvider client={client}>
            <Layout>
              <Component {...pageProps} key={router.asPath} />
              <ToastContainer />
            </Layout>
          </ApolloProvider>
        </ShopProvider>
      </ToastProvider>
    </div>
  );
}
export default MyApp;
