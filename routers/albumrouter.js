const express = require("express")
const router = express.Router();
const albumdata = require("../albumsdata")
router.get("/",(req,res)=>
{
res.send(albumdata)
})
router.post("/",(req,res)=>
{
    res.send(" this is post method of album ")
})
router.delete("/",(req,res)=>
{
    res.send(" this is delete of album ")
})
router.put("/",(req,res)=>
{
    res.send("this is update  of album ")
})
module.exports = router