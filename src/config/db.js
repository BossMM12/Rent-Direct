const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            userCreateIndex: true, 
        });
        console.log('Database connected successfully: ${connect.connection.host}');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;