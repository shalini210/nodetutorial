exports.hi=()=>
{
    console.log(" this is hi function of calculate class")
}
exports.add=(x,y,z=0,p=0)=>
{
    x = parseInt(x)
    y = parseInt(y)
    z = parseInt(z)
    p=parseInt(p)
    var sum = 0;
    sum = x+y+z+p
    return sum;    
}

// sum,multiplication,divide,difference,primeno , average of 3 no ,
//find max of three parameters/two parameter;
// find min of three parameters