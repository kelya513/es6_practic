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

console.log('------------st task8');
/*
 Task#8 Constant non-constance

 Does the fact that account is constant mean that we can't update password?
 Why, or why not? And if not, how could we make it so that we can't?
 */


// 1й способ
const account = Object.freeze({ //объект становится эффективно неизменным. Метод возвращает замороженный объект.
    username: "marijn",
    password: "xyzzy"
});

account.password = "s3cret"; // (*much* more secure)

console.log(account.password); //=> xyzzy

//2й способ
const user = {
    username: "marijn"
};

Object.defineProperty(user, "password", {
    value: "xyzzy",
    writable: false, // запретить присвоение "user.password="
    configurable: false // запретить удаление "delete user.password"
});

user.password = "s3cret"; // (*much* more secure)

console.log(user.password); //=> xyzzy

/*
 ---------------------------------------------------------------------------------------------
 */

console.log('------------st task9');
/*
 Task#9 Hoist the class

 This code produces an error. So apparently, unlike functions, classes are not hoisted to the top of their scope.
 (They are block-scoped.)

 What could be the reason for this?
 */

/*
 Разница между объявлением функции (function declaration) и объявлением класса (class declaration) в том,
 что объявление функции совершает подъём (hoisted), в то время как объявление класса — нет (not hoisted).
 Поэтому вначале необходимо объявить ваш класс и только затем работать с ним
 */
class Something {}

let s = new Something(); //=>not error
console.log(s);