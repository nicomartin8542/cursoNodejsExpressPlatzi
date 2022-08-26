import nodemailer from 'nodemailer';
import config from '../../config/config.js';

export const sendMail = async (data) => {
  const { to, subject, text, html } = data;

  let transporter = nodemailer.createTransport({
    host: config.sftpMail,
    port: config.portMail,
    secure: true, // true for 465, false for other ports
    auth: {
      user: config.userMail, // generated ethereal user
      pass: config.passMail, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: config.userMail, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, //'<b>Hello world?</b>', // html body
  });

  //Send mail
  return info.messageId;
};
