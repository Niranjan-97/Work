const express = require('express');
// const chalk = require('chalk'); // it writes console messages in color
const debug = require('debug')('app');
const morgan = require('morgan');
const ejs = require('ejs');
const app = express();
const path = require('path');
const sessionRouter = express.Router();
app.use(morgan('tiny'));
// app.use(express.static(path.join(__dirname,'/public/')));

app.set('views','./src/views');
app.set('view engine','ejs');

sessionRouter.route('/').get((req,res)=>{
    res.send("hello Sessions");
});
sessionRouter.route('/1').get((req,res)=>{
    res.send("hello single Session");
});

app.use('/sessions',sessionRouter);
app.get('/',(req,res)=>{

res.render("index",{title:"Globomontics",
                     data: ["a","b","c"] });
});



app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`);
    debug(`server is running at ${process.env.PORT}`);
})