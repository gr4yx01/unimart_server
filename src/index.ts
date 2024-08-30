import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
})

app.listen('4000', () => {
    console.log("Server's up");
})
