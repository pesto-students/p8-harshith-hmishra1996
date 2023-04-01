// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Check if the linked list has a loop
  hasLoop() {
    if (this.head === null) {
      return false;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next; 
      fast = fast.next.next; 

      if (slow === fast) {
        // If they meet, there's a loop
        return true;
      }
    }
    return false;
  }
}

// Example usage
const list = new LinkedList();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

list.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("Linked list has a loop:", list.hasLoop());
