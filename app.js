var nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
     user: 'logeshe48@gmail.com',
     pass: process.env.MAIL_APP_PASSWORD
    },
   });

var mailOptions = {
  from: 'hithere@gmail.com',
  to: 'logeshe9159@gmail.com',
  subject: 'You received message Boss!!',
  text: 'From your beautiful portfolio, go check it'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 