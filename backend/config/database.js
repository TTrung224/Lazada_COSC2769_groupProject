import { connect } from 'mongoose';
const { MONGO_URL } = process.env 

export function connect() {
    connect(MONGO_URL)
    .then(() => {
        console.log('Connected to ' + MONGO_URL);
    }).catch((error) => {
        console.error('Error connecting to ' + MONGO_URL);
        console.error(error);
        process.exit(1);
    })
}