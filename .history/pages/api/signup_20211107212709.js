import { stringify } from 'postcss';
import { customerCreate } from '../../lib/shopify';
export default async (values) => {
  //   const { email, password } = values;
  //   console.log(req.body);

  //create user for shopify store front
   const lalala = {
      "input": {
        "email": "user@example.com",
        "password": "HiZqFuDvDdQ7"
      }
    }
  try {
     console.log(values);
    const customer = await customerCreate(lalala);
    console.log(customer);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(values);
};
