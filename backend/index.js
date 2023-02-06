const express = require('express')
const app = express()
app.use(express.json())


app.listen(5000,()=>{
    console.log("your port is running on port 5000")
})