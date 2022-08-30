import nodemailer from 'nodemailer';
import config from '../../config/config.js';

export const sendMail = async (data) => {
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
  await transporter.sendMail(data);
};
