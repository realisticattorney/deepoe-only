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
//english being the protocol in which most of humanity's value is produced and exchanged. Features of the english language such as relentesly incoporating new terminology, which I dont believe it's only due to its community openess regarding other culture's.

//but because I've always leaned towards american values


//two ways of being manipulated
//they make you believe a third party owes you and you're a helpless victim without this messenger's help
//they make you feel guilty for crimes you did not commit
//they make you feel angry for crimes someone else did not commit to