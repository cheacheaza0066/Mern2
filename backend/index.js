import express from 'express';
import mongoose from 'mongoose';
import {bookRoutes} from './routes/booksRoute.js'; // Add .js extension
import {authRoutes} from './routes/authRoute.js';
import cors from 'cors';

const app = express()
app.use(express.json());

const PORT = 5555;

app.use(cors());

app.use('/books',bookRoutes)
app.use('/books',authRoutes)


const MongoDBURL = 'mongodb+srv://cheacheaza:l8bsgEtWgqY03YLT@mern-workshop.nkq2pke.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MongoDBURL)
.then(()=>{
    console.log('app Connection to database')
    app.listen(PORT,()=>{
        console.log(`server running in port ${PORT}`)
        
    })
}).catch((error) => {
    console.log(error);
  });