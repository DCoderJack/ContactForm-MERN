const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://codingjack20:vSK9D3uYuo6UX0fc@cluster0.xf9iu6m.mongodb.net/userData'

const connectToMongo = () => {
    mongoose.connect(mongoURI,()=>{
            console.log("Connected to MongoDB Successfully!");
    }).then(()=>{
            console.log("Connected to MongoDB Successfully!")
        }).catch((e)=>{
            console.log(e);
        })
}

module.exports = connectToMongo;

