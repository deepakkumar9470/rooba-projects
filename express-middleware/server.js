import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 8000
import cb from './db/db.js'
import userRoute from './routes/userapi.js'
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;
    const accessToken = req.headers.authorization || 'No Access Token';

    const logMessage = `[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`;

    console.log(logMessage);

    next();
};

// Demonstrate to apply the middleware to an Express app. 
// Apply the middleware globally to all routes
app.use(logRequest);
app.use('/api/user', userRoute)

// Database connection
cb()

app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(PORT, () => {
    console.log(`Server started at post http://localhost:${PORT}`)
})
