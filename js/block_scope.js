console.log('------------st task7');
/*
 Task#7 Closing over scope

 This is a typical mistake to make in JavaScript.
 We create a number of functions in a loop, and refer to an outside variable from these functions.
 All of them will end up referring to the same variable, which ends up being incremented to 10.
 Thus, callbacks[2] does not log 2. It logs 10, as do all functions in the array.

 Do you know the solution for such situations in ES5? Does ES6 provide a cleaner solution?
 */

//ES5
var callbacks_es5 = [];
for (var i = 0; i < 10; i++) {
    (function (i) { //обернут в скобки, чтобы интерпретатор понял, что это Function Expression => замыкание
        callbacks_es5.push(function () {
            console.log(i)
        })
    })(i)
}

callbacks_es5[2]();

//ES6
var callbacks_es6 = [];
for (let i = 0; i < 10; i++) { //используется let, a не var
    callbacks_es6.push(function() { console.log(i) })
}

callbacks_es6[2]();


/*
 ---------------------------------------------------------------------------------------------
 */