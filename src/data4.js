function bar() {
    return 45
}

function foo() {
    return 40
}

function add(x,y) {
    return x = y
}
add(35,45)

function add2(fn1,fn2) {
    return add(fn1(), fn2())
}
add2(bar, foo)

function data(value) {
    return function() {
        return value;
    }
}
data(45)()
 
