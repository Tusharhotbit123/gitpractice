// function nitesh_sir(){//normal function

//     console.log("good morning my name is nitesh and i am your mentor")

// }

// const tushar=()=>{ //arrow function from es6/7
//     console.log("good morning my name is tushar and i am a trainee at hotbit infosoft pvt ltd")
// }

// nitesh_sir()
// tushar()


// setTimeout(()=>{

//     let element=document.getElementById("hOne").innerText="this has been read"
// },3000)
//types of events in js
//onclick
//onchange
//oninput
//onunload
//onload
//onmouseover
//onmouseout
//onmousedown
//onmouseup

// const changeText=()=>{
//     const element=document.getElementById("hOne")
//     element.innerText="Thankyou"
// }

const form=document.querySelector("#userform")
const input=document.querySelector("#username") 
const list=document.querySelector("#userlist")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    const val=input.value
    const li=document.createElement("li")
    li.innerText=val
    list.appendChild(li)

})

