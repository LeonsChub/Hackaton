const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods:['GET','POST']
}))

module.exports = app;

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "618a90bedce98b",
    pass: "2f82d59741b6e2"
  }
});



app.post('/sendEmail',(req,res)=>{
  const emails = req.body.emails.join(',');
  const data = req.body.eventData;

  console.log(data)

  const mailOptions = {
    from: 'noReply@noCalendar.com',
    to: emails,
    subject: 'Invite',
    text: `Hey there, You have been invited to ${data.eventName}! at ${data.eventStart} to ${data.eventEnd}`,
}

transporter.sendMail(mailOptions, (err,success)=>{
  if(err)
    {
      res.send('Oh oh something went wrong')
    }
    else{
      console.log('Invites sent via email')
    }
})
});

app.listen(3000,()=>{
  console.log('listening on port', 3000)
})