// import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { email, password } = req.body;
   console.log(email, password);

   
  try {
    //  const emailRes = await transporter.sendMail({
    //    from: email,
    //    to: 'g.axl.aquila@gmail.com',
    //    subject: `Contact form submission from ${name}`,
    //    html: `<p>You have a new contact form submission</p><br>
    //    <p><strong>Name: </strong> ${name} </p><br>
    //    <p><strong>Message: </strong> ${message} </p><br>

    //    `,
    //  });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};