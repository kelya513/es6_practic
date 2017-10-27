console.log('------------st task25');
/*
 Task#25 List iterator

 Make the List class (a linked list implementation) iterable by adding a [Symbol.iterator] method.

 (Remember: an iterator is an object with a next method that returns {value, done} objects.)
 */


class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f))
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        if (this.current === undefined) {
            this.current = this;
        }

        if (this.current) {
            let val = this.current.head;
            this.current= this.current.tail;
            return {
                done: false,
                value: val
            };
        } else {
            delete this.current;
            return {
                done: true
            };
        }
    }

}

let lists = new List("x", new List("y", new List("z", null)));

for (let elt of lists) console.log(elt)
// → x
//   y
//   z

/*
 ---------------------------------------------------------------------------------------------
 */

console.log('------------st task26');
/*
 Task#26 Take N

 The integers function creates an infinite iterator, that keeps on producing integers forever.

 Implement the take function, which wraps an iterator in another iterator, but cutting it off after n elements.
 */


function integers() {
    let i = 0;
    return {next() { return {value: i++} },
        [Symbol.iterator]() { return this }}
}

function take(n, iter) {
    return {
        next() {
            let next = iter.next().value;

            if ( next < n){
                return {done:false, value: next}
            }

            return {done:true}
        },
        [Symbol.iterator]() { return this }
    }
}

for (let elt of take(3, integers()))
    console.log(elt)
// → 0
//   1
//   2

/*
 ---------------------------------------------------------------------------------------------
 */
console.log('------------st task27');
/*
 Task#26 List.from

 Here is our List class again. In ES6, Array has a static method from, which does the thing that you'd
 now use Array.prototype.slice.call for—turn an array-like object (like arguments or node.childNodes)
 into a real array. If its argument it iterable, it'll take the values from the iterator, and create an
 array from that. If not, it'll look for a length property, and use integer indexes to fetch element values.

 Add a static from method to the List class, which behaves the same way: It takes a single argument.
 If that argument is iterable (has a Symbol.iterator property), it iterates of it, and creates a list from its content.
 If not, it loops over the object's indices (using .length), and builds a list from its content.

 Note that lists are easiest to build from back to front.
 You might want to first convert an iterable to an array to make building your list easier.
 Alternatively, use mutation to build the list front-to-back.
 */

class List2 {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    map(f){
        return new List2(f(this.head), this.tail && this.tail.map(f))
    }

    static isIterable(obj) {
        // checks for null and undefined
        if (obj == null) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    static fromM(obj){

        let newObj, arr;
        if (this.isIterable(obj)){
            arr = Array.isArray(obj) ? obj : obj.split('');
            arr.reverse();
            newObj = new List2(arr[0], null);
            for(let i = 1; i < arr.length; i++){
                newObj = new List2(arr[i], newObj);
            }
            return newObj;
        }

        return 'не итерируется';
    }

}


console.log(List2.fromM([3, 2, 1]));// → List{head: 3, tail: List{head: 2, tail: List{head: 1, tail: null}}}
console.log(List2.fromM(5485)); // 'не итерируется';
console.log(List2.fromM('sdsad')); //→ List{head:s, tail: ....


/*
 ---------------------------------------------------------------------------------------------
 */