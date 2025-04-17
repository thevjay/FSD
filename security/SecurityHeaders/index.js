const express = require('express')
const app = express();


const redirectToHttps = (req,res,next) => {
    if(req.headers['x-forwarded-proto'] !== 'https'){
        // Redirect to HTTPS
        return res.redirect(['https://',req.get('host'),req.url].join(''))
    }
    next();
}

app.use(redirectToHttps)

app.use((req,res,next)=>{
    res.setHeader('Referrer-Policy','origin');
    res.removeHeader('X-Powered-By');
    res.setHeader('X-Content-Type-Options','nosniff')
    res.setHeader('Strict-Transport-Security','max-age=31536000','includeSubDomains; preload');
    next()
})

app.get('/list',(req,res)=>{
    res.send([{
        id: 1,
        title: "Namaste frontend "
    }])
})



app.listen(5010,()=>{
    console.log("Server is running http://localhost:5010")
})