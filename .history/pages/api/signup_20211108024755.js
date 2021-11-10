import { stringify } from 'postcss';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { customerCreate } from '../../lib/shopify';

const query = gql`
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customer {
      id
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`;
const [createCustomer] = useMutation(CREATE_CUSTOMER);

export default async (values) => {
  try {
    console.log(values);
    const customer = await createCustomer(values);
    console.log(customer);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(values);
};





async function onSubmitForm(values) {
const URL = `https://${domain}/api/2021-10/graphql.json`;

const options = {
  endpoint: URL,
  method: 'post',
  headers: {
    // gotten from https://shopify.dev/api/storefront/getting-started
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ values }),
};


try {
  const response = await createCustomer(options);
  console.log(response);
  if (response.status == 200) {
    reset();
    toast('success', 'Check your email box to confirm your account');
  }
} catch (err) {}