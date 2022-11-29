const mongoose = require('mongoose')



const connectionDB = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL,
            {
                useUnifiedTopology:true,
                useNewUrlParser:true
            })
            console.log("MongoDB connected sucessfully")
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectionDB