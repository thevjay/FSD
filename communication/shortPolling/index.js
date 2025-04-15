const express = require('express')
const app = express();

let data = 'Initial Data'

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/getData',(req,res)=>{
    res.send({
        data
    });
})

//Use post/put to update
app.get('/ ',(req,res)=>{
    data = 'Updated Data'
    res.send({
        data
    })
})

const port = 5111;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})