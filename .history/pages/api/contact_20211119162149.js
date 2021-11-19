import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'g.axl.aquila@gmail.com',
      subject: `${subject} from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} P </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
    });

    console.log('Message Sent');
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
