console.log('------------st task10');
/*
 Task#10 Accounting

 Write an expression using higher-order array methods
 (say, filter and reduce) to compute the total value of the machines in the inventory array.
 */

const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
];

let totalMachineValue = inventory.reduce((sum,a)=> sum +=a.value , 0);

console.log(totalMachineValue);


/*
 ---------------------------------------------------------------------------------------------
 */
console.log('------------st task11');
/*
 Task#11 Sorted array

 The code for this exercise implements a wrapper for working with sorted arrays.
 Its constructor takes a comparison function that compares two elements and returns a number,
 negative if the first is less than the second, zero when they are equal, and positive otherwise
 (similar to what the sort method on arrays expects).

 Rewrite the code to use an ES6 class.
 Then, rewrite the loop to use the ES6 array method findIndex, which is like indexOf,
 but takes a function instead of an element as argument, and returns the index of the first element
  for which that function returns true (or returns -1 if no such element was found).
  For example [1, 2, 3].findIndex(x => x > 1) yields 1. Use arrow functions for all function expressions.
 */

class SortedArray{
    constructor(compare){
        this.compare = compare;
        this.content = [];
    }

    findPos(elt){
        for (var i = 0; i < this.content.length; i++) {
            if (this.compare(elt, this.content[i]) < 0) break
        }
        return i
    }

    insert(elt) {
        this.content.splice(this.findPos(elt), 0, elt)
    }
}

var sorted = new SortedArray((a, b) => a - b );
sorted.insert(5);
sorted.insert(1);
sorted.insert(2);
sorted.insert(4);
sorted.insert(3);
console.log("array:", sorted.content);

/*
 ---------------------------------------------------------------------------------------------
 */
