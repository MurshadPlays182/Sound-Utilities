const mongoose = require('mongoose')
const mongoPath = ''
//your mongo path here https://mongodb.com/


module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}