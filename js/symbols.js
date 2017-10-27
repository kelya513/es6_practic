
console.log('------------st task24');
/*
 Task#24 Privacy

 Change the Queue class to use a symbol instead of an underscore-prefixed property name for the private content property.
 */


// let content = Symbol('content');
// let content = Symbol.for('content');

// class Queue {
//     constructor() {
//         this[content] = []
//     }
//     put(elt) {
//         return this[content].push(elt)
//     }
//     take() {
//         return this[content].shift()
//     }
// }

class Queue {
    constructor() {
        this[Symbol.for('content')] = []
    }
    put(elt) {
        return this[Symbol.for('content')].push(elt)
    }
    take() {
        return this[Symbol.for('content')].shift()
    }
}

let q = new Queue;
q.put(13);
q.put(32);
q.put(34);
console.log(q.take());
console.log(q.take());

/*
 ---------------------------------------------------------------------------------------------
 */