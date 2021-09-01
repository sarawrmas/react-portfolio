const express = require('express')
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN
  }
});

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

app.post('/send', (req, res) => {
  console.log(req.body)
  let mailOptions = {
    from: `${req.body.email}`,
    to: 'sara.m.adamski@gmail.com',
    subject: "Portfolio response",
    html: `
    <p>You have a new contact request.</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Message: ${req.body.message}</li>
    </ul>
    `
  }

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log(err)
      res.json({
        status: "fail"
      });
    } else {
      res.json({
        status: "success"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});