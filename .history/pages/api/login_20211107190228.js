import { customerCreate } from '../../lib/shopify';
export default async (req, res) => {
  const { email, password } = req.body;
   console.log(email, password);
   //create user for shopify store front
   const  = await getCollections();

   
  try {

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
