import { stringify } from 'postcss';
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';
import { customerCreate } from '../../lib/shopify';




export default async (values) => {
   
   const query = `
   mutation customerCreate($input: ${input}!) {
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
   




  try {
     console.log(values);
    const customer = await customerCreate(JSON.stringify(lalala));
    console.log(customer);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(values);
};
