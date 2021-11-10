import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';
import { useRouter } from 'next/router';
import ToastContainer from '../components/ToastContainer';
import { ToastProvider } from '../context/ToastContext';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const domain = process.env.SHOPIFY_STORE_DOMAIN;


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
      console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
      );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    
const httpLink = new HttpLink(...)
const link = ApolloLink.from([
  errorLink,
  httpLink,
])

const client = new ApolloClient({
  link: `https://${domain}/api/2021-10/graphql.json`,
  cache: new InMemoryCache(),
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
