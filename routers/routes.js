const express   = require('express');
const router    = express.Router();
const userSchema = require("../models/schema")

router.get('/',(err, res) => {
    res.render('register',{title : 'Fill Form',password:'',email:''})
});

router.post('/register',async(req, res) => {
    try{
            const {
                name,
                number,
                email,
                pswd,
                cpswd
            } = req.body;

        if(pswd === cpswd)
        {
            const userData = new userSchema({
                name,
                number,
                email,
                pswd,
                cpswd
            })
            
            userData.save(
            err => {
                if(err){
                    console.log("errorrrrr") 
                }
                else{
                    res.render('register',{title:'done',password : '',email:''})  
                }
            })


            const usermail = await userSchema.findOne({email:email});
            if(email === usermail.email)
            {
                res.render('register',{title:'',password : '',email:'repeat email'})
            }
            else
            {
                console.log('err');
            }
           
            
        }
        else
        {
            res.render('register',{title:'',password : 'passsword not match',email:''})  
        }
    }
    catch(error){
        res.render('register',{title:'Error in code',password : '',email:''}) 
    }
});




// login

router.post('/login',(req,res) => {
    
    const{
        email,pswd
    }=req.body;

    userSchema.findOne({email:email,pswd:pswd},(err,result) => {
        if((email === result.email) && (pswd === result.pswd))
        {
            res.render('homepage',{name : result.name})
        }
    })
})
module.exports = router;
