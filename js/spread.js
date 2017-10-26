console.log('------------st task16');
/*
 Task#16 Spread out

 Simplify these three functions by using the spread syntax.

 The first one, replace, replaces part of an array with elements from another array.

 The second one, copyReplace, does the same, but creates a new array rather than modifying its argument.

 The third one is used to record a birdwatcher's sightings. It takes first a timestamp (say, a Date),
 and then any number of strings naming birds. It then stores these in the birdsSeen array.
 */

function replace(array, from, to, elements) {
   // array.splice.apply(array, [from, to - from].concat(elements));
    array.splice(from, (to-from), ...elements);
}

let testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);



function copyReplace(array, from, to, elements) {
    //return array.slice(0, from).concat(elements).concat(array.slice(to))
    return [...array.slice(0, from), ...elements, ...array.slice(to)];
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));



let birdsSeen = [];
function recordBirds(time, ...birds) { // ...variable => соединения отдельных значений в массив
   // birdsSeen.push({time, birds: Array.prototype.slice.call(arguments, 1)})
    birdsSeen.push({time, birds: birds})

}

recordBirds(new Date, "sparrow", "robin", "pterodactyl");
console.log(birdsSeen);


/*
 ---------------------------------------------------------------------------------------------
 */