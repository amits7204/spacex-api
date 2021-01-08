const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 8080;

const userDatabase = [];

// Create users endpoint
app.post('/users', (req, res) => {
  const { phone_number, message } = req.body;
  console.log(message)
  const user = {
    phone_number, message
  };

  userDatabase.push(user);
  function generateOTP(){
      let digits = '0123456789'
      let OTP = ''; 
    for (let i = 0; i < 6; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    
    console.log("OTP: ", OTP)
    return OTP; 
  }
  sendSms(user.phone_number, user.message);
  let ts = Date.now();
  console.log(Math.floor(ts/1000));
  res.status(201).send({
    message: 'Account created successfully',
    phone: user.phone_number,
    message: user.message+" "+generateOTP(),
    time: Math.floor(ts/1000)
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;