import { stringify } from 'postcss';
import { customerCreate } from '../../lib/shopify';

export default async  (values) => {

  try {
    console.log(values);
    const customer = await customerCreate({ input: values});
    console.log(customer);
    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(values);
};
