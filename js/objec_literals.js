console.log('------------st task4');
/*
 Task#4 Fake point

 Use a single object literal to create an object that is indistinguishable from a Point
 instance, without calling the Point constructor.
 */

//класс Point определен в файле "js/classes.js"

let obj_Point = new Point(1,1);
console.log(obj_Point);

let fake_Point = Object.assign({}, obj_Point);
// console.log(fake_Point.plus({x:2, y:3})); //Uncaught TypeError: fake_Point.plus is not a function
fake_Point.__proto__ = obj_Point.__proto__; // console.log(fake_Point.plus({x:2, y:3}) => Point {x: 3, y: 4}
console.log(fake_Point);

/*
 ---------------------------------------------------------------------------------------------
 */
console.log('------------st task5');
/*
 Task#5 Configurable property

 Fill in the startNode function using a single object literal.
 The function should return an object with type and value properties containing the value of the arguments by those names,
 and a third property, named by the sourceProperty option, set to the value of the sourceValue option.
 */


function startNode(type, value, options) {
    return {
        type,
        value,
        [options.sourceProperty] : options.sourceValue
    };
}

console.log(startNode("Identifier", "foo", {
    sourceProperty: "src",
    sourceValue: "bar.js"
}));
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}


/*
 ---------------------------------------------------------------------------------------------
 */
console.log('------------st task6');
/*
 Task#6 Singleton

 Add a get method to the ids object, which returns the next id and increments its next counter. Use the short method syntax.
 */

var ids = {
    next: 0,
    get(){
        return this.next++
    }
};
console.log(ids.get());// → 0
console.log(ids.get());// → 1
