const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ईमेल भेजने का सेटअप
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sahil911539@gmail.com', // vo email jisase send hoga 
    pass: 'lzdh tshi gyxc qnze' 
  }
});

app.post('/send-email', (e, res) => {
  const { name, email, phone, message } = e.body;

  const mailOptions = {
    from: email,
    to: 'BBice1@verizon.net', // vo user jisko email send hoga 
    subject: `New Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(8080, () => console.log('Server running on port 8080'));