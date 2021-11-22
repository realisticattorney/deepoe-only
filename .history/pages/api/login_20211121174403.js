import { stringify } from 'postcss';
import { customerAccessTokenCreate } from '../../lib/shopify';
export default async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  //create user for shopify store front
  const customer = await customerAccessTokenCreate(
    JSON.stringify({email: email, password: password })
  );
  console.log(customer);

  try {
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
//english being the protocol in which most of humanity's value is produced and exchanged. Features of the english language such as relentels