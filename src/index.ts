import express from 'express'
const mongoose = require("mongoose")

const app = express();
const cors = require("cors")
app.use(cors({
    origin: true,
    credentials: true
}));
const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    const a = 4;
    if(a > 5) {
        res.send('OK');
    } else {
        res.send('Hello World')
    }
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} Port`)
})
