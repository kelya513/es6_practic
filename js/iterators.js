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