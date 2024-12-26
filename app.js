//closures
//closures is a function bundled with its lexical scope

function x(){

    var a=7;

    function y(){
        console.log(a)
    }

    return y;

}

var z=x()
z()//function y remembers its surrounding and hence even after x has finished its execution,it still works and we can print a 
