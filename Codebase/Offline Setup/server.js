const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    console.log("hi")
    res.status(500).json({message : "Error"})
})

app.listen(3000)