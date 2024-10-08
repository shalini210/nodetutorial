var http = require("http")
var url = require("url")
var calculate = require("./calculate.js")
http.createServer((req,res)=>
{
    let parsedURL = url.parse(req.url,true)
    switch (parsedURL.pathname) {
        case "/add":
            let s = calculate.add(parsedURL.query.a,parsedURL.query.b)
            res.write("sum "+s)
            break;        
        default:
            break;
    }   
res.end()
}
).listen("8080",()=>console.log("server running on localhost:8080"))