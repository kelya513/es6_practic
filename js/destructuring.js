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

function go(options={}) { // параметр по умолчанию
  //  options = options ? options: {};//присвоение опций, если ничего не передали, то пустой объект, что бы вывести значение выставленные по умолчанию.
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
console.log('------------st task14');
/*
 Task#14 Default argument

 It would be nice to be able to call our `lastIndexOf` function without providing the third argument,
 and have it default to starting at the end of the array.
 It would be even nicer if we could express this with an ES6 default argument value. Can we?

 In which scope are default arguments evaluated? (Experiment to find out.)
 */

function lastIndexOf(arr=[], elt=0, start = arr.length) { // значение параметра по умолчанию, вычисляются при вызове функции
    for (let i = start - 1; i >= 0; i--){
        if (arr[i] === elt) return i;
    }
    return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

/*
 ---------------------------------------------------------------------------------------------
 */
console.log('------------st task15');
/*
 Task#15 Improve this code

 The detectCollision function searches through an array of rectangles and returns the first rectangle that the given point is inside of.

 Use destructuring and a higher-order function to make this code cleaner.
 You might want to use the new array method find, which takes a function as argument,
 and returns the first element in the array (the element, not its index) for which the function returns true.
 */

function detectCollision(objects, ...rest) {
    let point = {
     x: rest[0],
     y: rest[1]
    };
    let item = objects.find(item=>{
        if (point.x >= item.x && point.x <= item.x + item.width &&
            point.y >= item.y && point.y <= item.y + item.height)
            return item;
    });
    return item;
}

const myObjects = [
    {x:  10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x:   0, y:  0, width: 10, height:  5}
];

console.log(detectCollision(myObjects, 25,21));

/*
 ---------------------------------------------------------------------------------------------
 */