const promise=new Promise((resolve,reject)=>{

    let error=false;

    if(error){
        reject("error:there is an error")
    }else{
        resolve({username:"tushar",email:"tushar@example.com"})
    }
    
})

promise.then(function(user){
    console.log(user.email)
}).catch(function(err){
    console.log(err)
})