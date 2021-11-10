import { stringify } from 'postcss';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { customerCreate } from '../../lib/shopify';

export default async  (values) => {
//    const CREATE_CUSTOMER = gql`
//    mutation customerCreate($input: CustomerCreateInput!) {
//      customerCreate(input: $input) {
//        customer {
//          id
//        }
//        customerUserErrors {
//          code
//          field
//          message
//        }
//      }
//    }
//  `;
//  console.log('input', input);
//  const [createCustomer] = useMutation(CREATE_CUSTOMER);


  try {
   // const { data, error } = await createCustomer({
   //    variables: {
   //      input: {
   //        email: input.email,
   //        password: input.password,
   //      },
   //    },
   //  });
   //  console.log(values);
    const customer = await customerCreate(data);
   //  console.log(customer);
   //  console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(values);
};
