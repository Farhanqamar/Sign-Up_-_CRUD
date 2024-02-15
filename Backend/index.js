const express = require('express');

const app = express();


app.get('/', (req, res)=>{
    res.send(`Hello I am very happy today`)
})


const PORT =6001;

app.listen(PORT, ()=> {
    console.log(`app listen on PORT: ${PORT}`);
})