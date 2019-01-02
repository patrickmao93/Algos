// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stack = new Stack();
    this.temp = new Stack();
  }

  add(data) {
    this.stack.push(data);
  }

  remove() {
    this.transfer(this.stack, this.temp);
    const first = this.temp.pop();
    this.transfer(this.temp, this.stack);
    return first;
  }

  peek() {
    this.transfer(this.stack, this.temp);
    const first = this.temp.peek();
    this.transfer(this.temp, this.stack);
    return first;
  }

  transfer(fromStack, toStack) {
    while (fromStack.peek()) {
      toStack.push(fromStack.pop());
    }
  }
}

module.exports = Queue;
