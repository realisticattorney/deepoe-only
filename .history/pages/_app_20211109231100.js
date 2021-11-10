import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import ShopProvider from '../context/shopContext';
import { useRouter } from 'next/router';
import ToastContainer from '../components/ToastContainer';
import { ToastProvider } from '../context/ToastContext';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const domain = process.env.SHOPIFY_STORE_DOMAIN;
// const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;
// import gql from 'graphql-tag';
// import { useMutation } from '@apollo/react-hooks';
async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`;


const httpLink = HttpLink({
  uri: `https://${domain}/api/2021-10/graphql.json`
})

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
  link: httpLink,
  cache: new InMemoryCache()
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
