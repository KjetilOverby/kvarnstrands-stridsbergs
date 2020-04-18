const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require("nodemailer")
const config = functions.config();
const cors = require("cors")({origin: true})
admin.initializeApp();


const transporter = nodemailer.createTransport({ service: "Gmail", auth: {user: config.user.email, pass: config.user.password}})

let mailOptions = {from: 'Stridsbergs', to: 'kjeoever@msn.com', subject: 'Testing Nodemailer', text: 'Test is succesful'}
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.sendMail = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
cors(request, response, () => {
    transporter.sendMail(mailOptions, error => {
        if(error) {
            response.send(error)
        } else {
            response.send("Message sent successfully")
        }
    })
})
 });
