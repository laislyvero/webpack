
var y =5, z;

function bar(a, y){
    var z;
    foo(a)
    return [y, z]
    function foo(x) {
        y++;
        z= x * y;
    }
   
}



console.log(bar(20,5))
console.log(bar(20,5))
console.log(bar(20,5))