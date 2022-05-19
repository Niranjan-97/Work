const express = require('express');
const { Server } = require('http');
const app     = express();
require('dotenv').config();
/*
    You can also run your js file with node -r dotenv/config index.js command
    if you don't want to import the package in your code.
*/
app.get('/',(req,res)=>{
    res.send(`${process.env.USER_ID} ${process.env.USER_NAME} ${process.env.NODE_ENV}`);
});

app.listen(3000, ()=> console.log(`Server Ready`));

/*
Express is a framework that uses http module under the hood, app.listen() returns an instance of http.

you should use https.createServer if you needed to serve your app using HTTPS, as app.listen only uses the http module.

*/

process.on('SIGTERM', () => {
    Server.close(()=>{
        console.log(`Process Terminated`);
    });
});
 
/* Signals are POSIX Intercommunication system: a notification which is sent to a process in order to notify it
   of an event that occured. 
   
   SIGKILL: It is a signal that tells a process to be immediately terminate, and would act like process.exit();


   SIGTERM: It is a signal that tells a process to gracefully terminate. it is the signal that's sent from process
   managers like upstart or supervisord  and many others.

   you can send this signal from inside the program, in another function:
   ##process.kill(process.pid, 'SIGTERM');
   Or another Nodejs running program or any other app running in your system that knows the PID of the process you want
   to terminate.
*/

/*
*/
