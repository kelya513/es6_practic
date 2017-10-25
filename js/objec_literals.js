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

