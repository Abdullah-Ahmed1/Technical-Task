 const express= require("express")
 const app = express()

 app.use(express.json())

// app.get('/hello',(req,res)=>{
//     res.send("this route is reached")
// })

const mainRouter = require("./routes/main")
app.use('/book',mainRouter)

 app.listen(5000,()=>{
    console.log("your app is running on port 5000")
 })