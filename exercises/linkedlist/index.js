// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let temp = this.head;
    this.head = new Node(data);
    this.head.next = temp;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    if (!current) {
      return null;
    }
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
    return 0;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    // const size = this.size();
    // if (size < 2) {
    //   this.head = null;
    //   return;
    // }
    // let current = this.head;
    // for (let i = 0; i < size - 2; i++) {
    //   current = current.next;
    // }
    // current.next = null;
    if (!this.head) {
      return;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (!prev) {
      this.head = null;
    } else {
      prev.next = null;
    }
  }

  insertLast(data) {
    // const node = new Node(data);
    // let current = this.head;
    // if (!current) {
    //   this.head = node;
    //   return;
    // }
    // while (current.next) {
    //   current = current.next;
    // }
    // current.next = node;
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(pos) {
    // if (pos >= this.size() || pos < 0) {
    //   return null;
    // }
    // let current = this.head;
    // for (let i = 0; i < pos; i++) {
    //   current = current.next;
    // }
    // return current;
    if (pos < 0) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (current) {
      if (index === pos) {
        return current;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  removeAt(pos) {
    // const size = this.size();
    // if (pos >= size || pos < 0 || !size) {
    //   return;
    // }
    // if (pos === 0) {
    //   this.head = this.head.next;
    // }
    // let current = this.head;
    // for (let i = 0; i < pos - 1; i++) {
    //   current = current.next;
    // }
    // current.next = current.next.next;
    if (!this.head) {
      return;
    }
    if (pos < 1) {
      this.head = this.head.next;
      return;
    }
    const node = this.getAt(pos - 1);
    if (!node || !node.next) {
      return;
    }
    node.next = node.next.next;
  }

  insertAt(data, pos) {
    // const node = new Node(data);
    // const size = this.size();
    // if (pos < 1) {
    //   node.next = this.head;
    //   this.head = node;
    //   return;
    // } else if (pos > size) {
    //   pos = size;
    // }

    // let current = this.head;
    // for (let i = 0; i < pos - 1; i++) {
    //   current = current.next;
    // }
    // node.next = current.next;
    // current.next = node;
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (pos < 1) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = this.getAt(pos - 1) || this.getLast();
    node.next = new Node(data, node.next);
  }

  forEach(fn) {
    let current = this.head;
    let counter = 0;
    while (current) {
      fn(current, counter);
      current = current.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield node;
      current = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
