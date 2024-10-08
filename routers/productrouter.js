const express = require("express")
const router = express.Router();
const productController = require("../controller/ProductController")

router.get("/",(req,res)=>   //localhost:8080/Produts/
{
    res.send(productController.getall())
})
router.get("/findproduct",(req,res)=>    //localhost:8080/Produts/findproduct/?id=2
{
    let id = req.query.id;
    let p = productController.findproductbyID(id)
    res.send(p)
    // console.log(products)
    // let p = products.products.filter((x)=>x.id==req.query.id)
    // res.send(p)
})
router.post("/",(req,res)=>
{
    res.send("post method")
})
router.put("/",(req,res)=>
{
    res.send("put method")
})
router.delete("/",(req,res)=>
{
 res.send("deletemethod ")   
})
module.exports=router