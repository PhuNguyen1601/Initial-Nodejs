import mongoose from 'mongoose';
import properties from '../properties';
async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(properties.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect to DB successfully!!!');
    } catch (e) {
        console.log('Connect to DB failure!!!');
    }
}

module.exports = { connect };
