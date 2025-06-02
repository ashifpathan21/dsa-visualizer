class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.id = Date.now() + Math.random(); // unique ID for animation
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  insertAt(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    if (prev) {
      prev.next = newNode;
      newNode.next = current;
    }
  }

  deleteAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    if (prev && current) {
      prev.next = current.next;
    }
  }

  toArray() {
    const result = [];
    let temp = this.head;
    while (temp) {
      result.push({ value: temp.value, id: temp.id });
      temp = temp.next;
    }
    return result;
  }
}
