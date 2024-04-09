var nodemailer = require('nodemailer');
const express = require('express');
app = express()
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

app.get("/mail",(req,res)=>{
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send(error)
        } else {
          res.send('Email sent: ' + info.response);
        }
      }); 
})

app.listen(process.env.PORT,()=>{
    console.log("server is live");
})