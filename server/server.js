const express = require('express')
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
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

let transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: process.env.API_KEY,
  }
}));

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

app.post('/send', (req, res) => {
  let mailOptions = {
    from: "sara.m.adamski@gmail.com",
    to: "sara.m.adamski@gmail.com",
    subject: "Portfolio response",
    html: `
    <p>You have a new contact request!</p>
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
      console.log("Error: " + err)
      res.json({
        status: "fail"
      });
    } else {
      console.log("data: " + JSON.stringify(data))
      res.json({
        status: "success"
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});