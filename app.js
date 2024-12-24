//poylfill example

const arr=[1,2,3,4,5]

Array.prototype.forEach=null

if(!Array.prototype.forEach){

    Array.prototype.forEach=function(callbackfunction){

        for(let val of this){
            callbackfunction(val)
        }

    }
}

arr.forEach((val)=>{
    console.log(val*2)
})

