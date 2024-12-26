//memoization
// Memoization in JavaScript is an optimization technique used to improve the performance of functions by caching their results. If a function is called with the same arguments, the cached result is returned instead of recomputing the result. This is particularly useful for expensive operations like recursive algorithms or computations that are repeatedly invoked with the same inputs.

//debouncing
// Debouncing in JavaScript is a way to control how often a particular function is executed, especially for events that fire repeatedly in quick succession, like scroll, resize, or input.

function debounce(func,delay){//debouncing function

    let timer;

    return function(){
        clearInterval(timer)//clearing the timer
        timer=setTimeout(func,delay)
    }

}

let counter=0;
function sayHello(){
    console.log("Hello",counter++)
}

const debouncedSayHello=debounce(sayHello,1000)

document.getElementById("myButton").addEventListener("click",debouncedSayHello)