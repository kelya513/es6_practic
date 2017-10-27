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