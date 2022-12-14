const mongoose = require('mongoose');

const URI = process.env.MONGODB_URL_URI;
const db = "mongodb+srv://bolishop:salas1610@cluster0.umjnqht.mongodb.net/?retryWrites=true&w=majority";

var mongoDB = URI || db;

//connect to MongoDB 1
/*
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is connected');
});
*/
//connect to MongoDB 2
mongoose.set('strictQuery', false);
mongoose
    .connect(mongoDB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));