const express = require('express'),
      app = express(),
      util = require('util'),
      port  = 3000;

//app.use(express.json());
app.use(logger);


app.get('/',(req,res,next)=>{
res.send("This is home page");
});
// // (req,res)=>{
// //     res.send('Hello World! This is a GET Request');
// // // console.log(`This is the req : ${util.inspect(req, {depth: null})}`);
// });
app.post('/',(req,res)=>{
    res.send("Hello! This is a POST Request");
});

app.put('/',(req,res)=>{
    res.send("Helooo This is a PUT Request ");
});

app.delete('/',(req,res)=>{
    res.send("Hello This is a delete Request");
});


app.listen(port,function(){
console.log(`Server is listening on port no : ${port}`);
});

function logger(req,res,next){
    console.log("This is a Middleware Func",req);
    if(1){
        next();

    }else{

        res.send("Please Authorize");

    }

}