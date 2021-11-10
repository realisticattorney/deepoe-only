import { stringify } from 'postcss';
import { customerCreate } from '../../lib/shopify';
export default async (values) => {

   const lalala = {
      "input": {
        "email": "user@example.com",
        "password": "HiZqFuDvDdQ7"
      }
    }
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
