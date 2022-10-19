import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.static('Public'));

app.get('/getmapkey', (req, res) => {
    res.json({ token: process.env.API_KEY })
})

app.listen(process.env.PORT, () => {
    console.log("cooking thing up at port" + process.env.PORT);
})