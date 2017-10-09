var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var transporter = nodemailer.createTransport( {
         host: "", // hostname 
         secureConnection: true, // use SSL
         port: 465, // port for secure SMTP
    auth: {
        user: "",//username of sender
        pass: ""// Password of sender
    },
        tls: {rejectUnauthorized: false},
        socketTimeout: 60 * 1000 // 1 min
});
app.get('/',function(req,res){
res.sendfile('index.html');
});
app.get('/send',function(req,res){
	console.log("req",req);
	var mailOptions={
   to : req.query.to,
   subject : 'Welcome!',
   html : "<p>Hello Dude!!!</p>"
}
transporter.sendMail(mailOptions, function(error, response){
if(error){
res.end("error");
}else{
res.end("sent");
}
});

});
app.listen(3000,function(){
console.log("Express Started on Port 3000");
});