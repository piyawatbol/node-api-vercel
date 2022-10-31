const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT,()=> {
    console.log(`Api Listening on PORT ${PORT}`)
})


app.get('/',(req ,res) =>{
    res.send("this is my api running......")
} )

app.get('/about',(req,res)=>{
    res.send("this is my about rout")
})


module.exports = app