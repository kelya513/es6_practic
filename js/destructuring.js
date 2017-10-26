console.log('------------st task13');
/*
 Task#13 Avoiding disaster

 This function uses destructuring for argument parsing.
 But it has a problem: it crashes when the caller passes an option object without an enable property.
 Since all options have defaults, we'd like to not crash in this case.
 Can you think of a clean way to fix this problem?

 If you also want to allow not passing in an option object at all, how would you solve that?
 */

// function go(options) {
//     let {speed = 4,
//         enable: {hyperdrive = false,
//             frobnifier = true}} = options
//     console.log("speed=", speed,
//         "hyperdrive:", hyperdrive,
//         "frobnifier:", frobnifier)
// }

function go(options) {
    options = options ? options: {};//присвоение опций, если ничего не передали, то пустой объект, что бы вывести значение выставленные по умолчанию.
    let {
        speed = 4,
        enable: {
            hyperdrive = false,
            frobnifier = true
        } =  {
            hyperdrive:false,
            frobnifier:true
        }
    }= options;

    console.log(`    speed= ${speed} 
    hyperdrive= ${hyperdrive} 
    frobnifier=  ${frobnifier} `)

}

go({speed: 5});
go({speed: 5, enable:{}});
go();// вызов вообще без параметров не вызовет ошибку, и выведет все значения по умолчанию



/*
 ---------------------------------------------------------------------------------------------
 */