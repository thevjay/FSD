const client = require("./client")

const path = require("path")
const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// TODO to expose rest call
// Which internally call gRPC server function using gRPC client

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Server running at port %d`,PORT)
})