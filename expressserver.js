const express = require("express")
const app = express();
const productRouter = require("./routers/productrouter")
const albumrouter = require("./routers/albumrouter")
app.use("/albums",albumrouter)
app.use("/products",productRouter)
app.get("/",(req,res)=>
{
    res.send("use /albums")
})




app.listen(8080,()=>console.log("server runnin"))