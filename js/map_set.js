console.log('------------st task20');
/*
 Task#20 Implement Map

 Implement your own version of Map, without actually using Map. I know I said this did not exist, but the catch is that you don't have to worry about algorithmic complexity—looking up a value in a big map can be as slow as it needs to be.

 Implement at least these methods/getters:

 set(key, value)
 Store the given value under the given key.
 get(key)
 Get the value of the given key.
 delete(key)
 Remove the given key from the map.
 get size()
 Get the amount of keys stored in the map.
 clear()
 Remove all keys from the map.
 */
class MyMap {
    constructor(){
        this.arr = [];//{value:undefined, done:true}];
    }

    set(key, value){ //можно чейнить
        let ind= -1;
        let item = this.arr.find((item,index)=>{if (item.key === key && item.type == typeof key){ind = index; return item}});
        if (item){
            this.arr[ind] = {key, type: typeof key, value};
        }else {
            this.arr.push({key, type: typeof key, value});//, done:false});
        }
        return this;
    }

    get(key){
        let item = this.arr.find((item)=>{if (item.key === key && item.type == typeof key){return item}});
        return (item ? item.value : undefined);
    }

    get size(){
       return this.arr.length;
    }

    delete(key){
        let i=-1;
        this.arr.forEach(find);
        function find(item, index){
            if (item.key === key && item.type == typeof key){
                return i=index}
        return false;
        }
        if (i >=0 ) {
            this.arr.splice(i, 1);
        }
    }

    clear(){
        this.arr = [];
    }

}

const names = new MyMap;
names.set(Array, "the array constructor");
names.set(Array, "the array constructor2").set('Array', "the array string constructor").set(Math, "the math object");
console.log(names.get(Array));// → "the array constructor2"
console.log(names.get('Array'));// → "the array  string constructor"
console.log(names.size);// → 3
names.delete(Array);
console.log(names.size);// → 2
console.log(names.get(Array));// → undefined
names.clear();
console.log(names.get(Math));// → undefined

/*
 ---------------------------------------------------------------------------------------------
 */