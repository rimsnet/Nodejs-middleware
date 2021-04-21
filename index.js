const express = require('express');
const app     = express();

const PORT    = process.env.PORT || 3000;

app.use(express.json());

//custom middleware
const checkUserMiddleware = (req, res, next) => {
   const username = req.body.username;
   if(username == 'usersa'){
      res.json({err:'Yo, we dont allow usersa'})
   }else{
      next();
   }
};

//middleware apply for every single requrests
/* app.use((req,res,next)=>{
   console.log("Middleware called");
   console.log(req.body);
   next();
}); */

app.get('/',(req,res)=>{
   res.json({message:"hello World"});
});

//use custom middleware
app.post('/', checkUserMiddleware, (req, res)=>{
   res.send('You logged In!')
});

app.listen(PORT,()=>{console.log(`App is running on ${PORT}`)});