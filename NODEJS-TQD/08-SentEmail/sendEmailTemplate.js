// sent email with one file .js
const nodemailer = require("nodemailer");
const fs = require('fs')
const path = require('path')

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Set up config
  const mailService = {
    port: 465,
    host: 'smtp.stackmail.com',
    username: 'no-reply@nguyenthotuan.me',
    password: 'INCLUDE-PASSWORD-HERE',
    fullname: '👻 NGUYENTHOTUAN.ME 👻',
  }

  const mailInfo = {
    to: 'nthotuan@gmail.com',
    subject: 'Activation Account',
    htmlContent: '',
  }
  const mailTemplatePath = path.join(__dirname, '/template/email_flatie_activation.html')

  // ================== Don't need edit bellow ==============================
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: mailService.host,
    port: mailService.port,
    secure: mailService.port === 465 ? true : false, // true for 465, false for other ports
    auth: {
      user: mailService.username, // generated ethereal user
      pass: mailService.password, // generated ethereal password
    },
  });

  mailInfo.htmlContent = fs.readFileSync(mailTemplatePath, 'utf8', (err) => {
    console.error('Read Template mail Fail', err)
  });
  if(mailInfo.htmlContent !== ''){
      // send mail with defined transport object
      console.log('sending ...')
      let info = await transporter.sendMail({
        from: `${mailService.fullname} <${mailService.username}>`, // sender address
        to: mailInfo.to, // list of receivers
        subject: mailInfo.subject, // Subject line
        html: mailInfo.htmlContent, // html body
      });
      console.log("Message sent successfully with id: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
}

main().catch(console.error);