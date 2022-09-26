const { default: mongoose } = require("mongoose")

const MONGODB_URL = process.env.MONGODB_URL
const dbConnect = () => {
   mongoose.connect(MONGODB_URL, () =>{
    console.log("db connection is working successfully");
   })
}

module.exports = {
    dbConnect
}