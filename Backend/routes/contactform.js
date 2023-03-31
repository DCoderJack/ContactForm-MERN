const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Route 1 : Post the User details filled in the Contact Form

router.post("/contact", async(req, res) => {
    // const userName = req.body.userName;
    // const email = req.body.email;
    // const age = req.body.age;
    // const phoneno = req.body.phoneno;
    // const subject = req.body.subject;
    // const message = req.body.message;

        
        
    try{
        const {  userName,email, age, phoneno, subject, message } = req.body;

        const data = new Data({
            userName, email , age, phoneno, subject, message
        });
        
        
        const savedData = await data.save().then((item) => {
            res.send(item+" saved to database");
          })
          .catch((err) => {
            res.status(400).send(err+"unable to save to database");
          });

        res.json(savedData);

    }catch{(error)=>{
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }}
})

module.exports = router;


