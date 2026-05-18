const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS2
    }
});

let mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'Email menggunakan Node.js dan Nodemailer',
    text: 'Naovee adalah glaceon yang lucu,'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('✅ Email berhasil dikirim!');
        console.log('Info:', info.response);
    }
});

// Cara menjalankan di Terminal VS Code:
// > node sendemail.js (Pastikan berada di direktori yang benar)