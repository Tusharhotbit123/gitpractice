fetch("https://reqres.in/api/users",{
    method:"GET"
    // headers:{
    //     'Content-Type':"application/json"
    // },
    // body:JSON.stringify({
    //     name:"USER 2"
    // })
}).then((res)=>{
    return res.json()
})
.then(data=>console.log(data))
.catch(err=>console.log(err))

