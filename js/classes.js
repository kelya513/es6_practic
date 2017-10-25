console.log('------------st task1');
/*
 Task#1 Point

 Write a class called Point, which represents a point in two-dimensional space.
 A point has x and y properties, given as arguments to its constructor.

 It also has a single method plus, which takes another point and returns the sum of the two points,
 that is, a new point whose x is the sum of the x properties of the two original points,
 and whose y is the sum of their y properties.
 */

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(obj){
      this.x += obj.x;
      this.y += obj.y;

      return this;
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1))); // → Point{x: 3, y: 3}

/*
---------------------------------------------------------------------------------------------
 */
console.log('------------st task2');
/*
 Task#2 Speaker upgrade

 Rewrite these two object types to use the class keyword, instead of direct prototype manipulation.
 Speaker is a simple type that exposes a speak method which, when called, logs the given text along with the speaker's name.
 Shouter is a subtype of Speaker which shouts its text and makes it uppercase.
 */

class Speaker{
    constructor(name, verb="says"){
        this.name = name;
        this.verb = verb;
    }

    speak(text){
        console.log(`${this.name} ${this.verb} '${text}'`);
    }
}

class Shouter extends Speaker{
    constructor(name){
        super(name, "shouts");
    }

    speak(text){
        super.speak(text.toUpperCase());
    }
}

new Shouter("Dr. Loudmouth").speak("hello there"); //Dr. Loudmouth shouts 'HELLO THERE'

/*
 ---------------------------------------------------------------------------------------------
 */
console.log('------------st task3');
/*
 Task#3 Getters

 The way the verb property is set per instance rather than per class is kind of awkward.
 Refactor the code to use a getter (get verb() { ... }) instead of an instance property.
 */

class Speaker3{
    constructor(name, verb="says"){
        this.name = name;
        this._verb = verb;
    }

    speak(text){
        console.log(`${this.name} ${this.verb} '${text}'`);
    }

    get verb(){ //added getter
        return this._verb;
    }
}

class Shouter3 extends Speaker3{
    constructor(name){
        super(name, "shouts");
    }

    speak(text){
        super.speak(text.toUpperCase());
    }
}

new Shouter3("Dr. Loudmouth").speak("hello there");
console.log(new Shouter3("Dr. Loudmouth").verb);