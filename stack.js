
class Stack {
    constructor() {
        this.items = [];
    }

    top() {
        return this.items[this.items.length - 1];
    }
    
    push(element) {
        return this.items.push(element);
    }
    
    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    isEmpty(){
       return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }
 
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(7);
console.log(stack.items);

stack.pop();


const removeOdd = (myArray) => {
    for (let j = 0; j < stack.size(); j++) {
        if (myArray[j] % 2 === 1) {
            myArray.splice(j, 1)
            break;
        };
    };
    return myArray;
}
resultArray = removeOdd(stack.items)
console.log(resultArray);

const duplicateStack = (myStack) => {
    let duplicate = new Stack();
    for (let i = 0; i < stack.size(); i++) {
        duplicate.push(myStack[i]);
    }
    return duplicate;
}
resultArray = duplicateStack(stack.items)
console.log(resultArray);