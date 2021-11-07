export default async (req, res) => {
  const { email, password } = req.body;
   console.log(email, password);
   //create user for shopify store front
   const user = await User.findOne({ email });
   if (!user) {
       return res.status(401).json({ error: 'User not found' });
   }
   if (!(await user.comparePassword(password))) {
   
  try {

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
