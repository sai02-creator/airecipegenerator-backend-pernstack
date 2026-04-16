import dotenv from 'dotenv';


dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Test route
app.get('/', (req, res) => {
    res.json({message: 'AI Recipe Generator API'});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});