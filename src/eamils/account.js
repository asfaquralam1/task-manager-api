const mailchimpMail = require('mailchimp-api-v3')
const mailchimpAPIkey = '08cd7aa30eb9cf2c6c4530f9dc284ab2-us20'

mailchimpMail.setApikey(mailchimpAPIkey)

mailchimpMail.send({
    to: 'ahsansagor445@gmail.com',
    from: 'ahsansagor445@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you.'
})
.then(() =>{
    console.log('Email was sent');
})