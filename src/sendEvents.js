const Event = require('./models/event');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Register',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const mustache = require('mustache');
const fs = require('fs');
const path=require('path');
var content = fs.readFileSync(path.join(__dirname, "./mail.html"), 'utf-8');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srijannits@gmail.com',
    pass: 'srijan_nits1'
  }
});


Event.find({ mailId: {$ne: "paulbiswajit47@gmail.com"}, transactionID: {$ne: null}, events: {$in: ["Business Quiz Competition", "IPL Auction"]}, mailEvent: {$ne: true} }, (err, events)=>{
  let c=0;
  console.log(events.length)
  // events.forEach(event => {
  //   if(event.mailId !== "paulbiswajit47@gmail.com"){
  //     const output = mustache.render(content, {
  //       events: event.events.join(),
  //       transactionID:event.transactionID,
  //       collegeName: event.collegeName,
  //       teamMembersName: event.teamMembersName,
  //       teamName: event.teamName
  //     });

  //     const mailOptions = {
  //       from: 'srijannits@gmail.com',
  //       to: event.mailId,
  //       subject: 'Invitation for SRIJAN NIT Silchar',        
  //       html: output
  //     };
      
  //     transporter.sendMail(mailOptions, function(error, info){
  //       if (error) {
  //         console.log('ERROR Send Mail', error);
  //       } else {
  //         console.log('Email sent: ' + event.mailId + '  ' + info.response);
  //         event.mailEvent=true;
  //         c+=1;
  //         console.log(''+c+ ' MAILS SENT...');
  //         event.save((err,event)=>{
  //           //console.log('Saved: ' + event.mailId);
  //         });
  //       }
  //     });
  //   }
  // });
});