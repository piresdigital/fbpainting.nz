export default function (req, res) {
  require('dotenv').config();

  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  let date = new Date();

  const nodemailer = require('nodemailer');
  const PASSWORD = process.env.PASSWORD;

  let transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'fabricio@fbpainting.nz',
      pass: PASSWORD
    },
    secure: true
  });

  // Email to business.
  let businessText = 'New Website Enquiry.';
  businessText += `\r\n \r\n`;
  businessText += `Name: ${name}\r\n`;
  businessText += `Email: ${email}\r\n`;
  businessText += `Phone Number: ${phone}\r\n`;
  businessText += `Message: ${message}\r\n \r\n`;
  businessText += `Sent on: ${date.toDateString()}`;

  let businessHTML = `<h2>New Website Enquiry.</h2>`;
  businessHTML += `<br /><br />`;
  businessHTML += `<b>Name</b>: ${name}<br />`;
  businessHTML += `<b>Email</b>: <a href="mailto:${email}">${email}</a><br />`;
  businessHTML += `<b>Phone Number</b>: ${phone}<br />`;
  businessHTML += `<b>Message</b>: ${message}<br />`;
  businessHTML += `<br /><br />`;
  businessHTML += `<i>Sent on: ${date.toDateString()}</i>`;

  const businessMailData = {
    from: 'fabricio@fbpainting.nz',
    to: 'fabricio@fbpainting.nz',
    subject: 'New Website Enquiry',
    text: businessText,
    html: businessHTML
  };

  transporter.sendMail(businessMailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send();
    }

    if (info) {
      res.status(200).send();
    }
  });
}
