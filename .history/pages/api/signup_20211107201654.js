import { stringify } from 'postcss';
import { customerCreate } from '../../lib/shopify';
export default async (values) => {
//   const { email, password } = values;
//   console.log(req.body);

  //create user for shopify store front
  
  try {
     const customer = await customerCreate(email, password);
    console.log(customer);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(values);
};
