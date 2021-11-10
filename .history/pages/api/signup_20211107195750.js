import { stringify } from 'postcss';
import { customerCreate } from '../../lib/shopify';
export default async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  //create user for shopify store front
  
  try {
     const customer = await customerCreate(JSON.stringify(req.body));
    console.log(customer);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
