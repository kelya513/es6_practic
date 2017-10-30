console.log('------------st task28');
/*
 Task#28 List generator

 Solve exercise Iterators.1 again, making the List class iterable by adding a [Symbol.iterator] method.
 But this time, use a generator function.

 (Remember: the syntax for declaring a Symbol.iterator generator method in a class is *[Symbol.iterator]().)
 */

class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail
    }

    map(f) {
        return new List(f(this.head), this.tail && this.tail.map(f))
    }

    *[Symbol.iterator]() {
        if (this.current === undefined) {
            this.current = this;
        }

        while (this.current) {
            let val = this.current.head;
            this.current= this.current.tail;
            yield val;
        }

        delete this.current;
        return {
            done: true
        };

    }

}

let list = new List("x", new List("y", new List("z", null)));
//console.log(list[Symbol.iterator]().next());

for (let elt of list) console.log(elt)
// → x
//   y
//   z

/*
 ---------------------------------------------------------------------------------------------
 */

console.log('------------st task29');
/*
 Task#29 Take N again

 Redo exercise Iterators.2 using a generator.
 */


function* integers() {
    for (let i = 0;; i++) yield i
}

function* take(n, iter) {
    let next = iter.next().value;

    while( next < n){
        yield next;
        next = iter.next().value;
    }

    return {done:true}
}

// console.log(take(3, integers()).next());

for (let elt of take(3, integers()))
    console.log(elt)
// → 0
//   1
//   2


/*
 ---------------------------------------------------------------------------------------------
 */

