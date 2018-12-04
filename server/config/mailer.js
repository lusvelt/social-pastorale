const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
});

const from = process.env.GMAIL_USERNAME;

const send = async (email) => {
    if (!(email.to && email.subject && email.html)) return false;

    email.from = from;
    const result = await transporter.sendMail(email);

    return result;
};

module.exports = { send };