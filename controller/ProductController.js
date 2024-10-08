const products = require("../Model/productsdata")
exports.findproductbyID=(id)=>
{
    let product = products.products.filter((x)=>x.id==id)
    return product;
}
exports.getall=()=>
{
    return products;
}