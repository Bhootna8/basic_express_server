import express from 'express';

const app = express();

app.get('/', (req, res)=> {
    res.send("server is ready to run")
})

app.listen(3222, ()=> {
    console.log("server is running")
})