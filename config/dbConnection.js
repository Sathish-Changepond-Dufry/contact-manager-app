const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`DB Connected: ${connect.connection.host} ${connect.connection.name}`)
    } catch (err) {
        console.error(err)
        console.log('db error occured')
        process.exit(1)
    }
}
module.exports = connectDB

 