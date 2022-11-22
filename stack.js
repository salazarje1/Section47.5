/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if(!this.size){
      this.first = newNode;
      this.last = newNode;
    }

    const temp = this.first;
    this.first = newNode;
    this.first.next = temp; 
    this.size++; 

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const rNode = this.first; 
    if(this.size === 1){
      this.first = null;
      this.last = null;
    }

    this.first = rNode.next; 
    rNode.next = null; 
    this.size--; 

    return rNode.val; 
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val; 
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(!this.size) return true;

    return false; 
  }
}

module.exports = Stack;
