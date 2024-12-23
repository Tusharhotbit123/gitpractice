const products=async()=>{
    try{

        const data=await fetch("https://dummyjson.com/products")

        const res = await data.json()
        // console.log(res,"ss");
        
        return res

    }catch(err){
        console.log(err)
    }
}

products().then(function(res){//asynchronous function in js returns promise
    console.log(res)
})
// console.log(values)