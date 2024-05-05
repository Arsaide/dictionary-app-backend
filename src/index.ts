import express from 'express'
const app = express();
// const cors = require("cors")
// app.use(cors({
//     origin: true,
//     credentials: true
// }));
const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api', (req, res) => {
    res.send('Start api')
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} Port`)
})
