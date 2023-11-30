const express = require('express');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');


dotenv.config();

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "844420439df21c",
      pass: "ee7de4b2d13ff1"
    }
  });

const loggerMiddleware = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

  const logMessage = `${timestamp} [${method}] [${url}]`;

  // Aquí puedes guardar el log en un archivo, base de datos, o enviarlo a la consola.
  console.log(logMessage);

  // Envío de correo electrónico
  const mailOptions = {
    from: 'your_email@example.com',
    to: 'recipient@example.com',
    subject: 'Nuevo registro de solicitud HTTP',
    text: logMessage,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });

  next();
};

module.exports = loggerMiddleware;