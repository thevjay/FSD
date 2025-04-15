const express = require('express');
const app = express();
const { join } = require('node:path');

app.get("/sse",(req,res)=>{
    // setup see logic
    res.setHeader('Content-Type','text/event-stream');
    res.setHeader('Connection','keep-alive');
    res.setHeader('Cache-Control','no-cache');

    res.write('data: Welcome to server sent event \n\n');

    const setIntervalId = setInterval(()=>{
        res.write(`data: Server Time ${new Date().toLocaleDateString()} \n\n`)
    },3000);

    req.on("close",()=>{
        clearInterval(setIntervalId)
    })
});

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:3000`)
})