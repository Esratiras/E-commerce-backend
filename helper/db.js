const mongoose = require('mongoose')

module.exports = () => {

    mongoose.connect(process.env.MONGODB_STRING_URL || 'mongodb://localhost:27017/e_commerce_app',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('open', () =>{
        console.log('Mongodb:connected')
    })

    mongoose.connection.on('error', () =>{
        console.log('Mongodb:connection error')
    })
}


