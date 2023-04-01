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

  // Left-shift the linked list by k nodes
  leftShift(k) {
    if (this.head === null || k === 0) {
      return;
    }

    let current = this.head;
    let lastNode;
    let count = 1;

    // Traverse the list to find the kth node and last node
    while (count < k && current !== null) {
      current = current.next;
      count++;
    }

    // If k is equal or greater than the number of nodes, do nothing
    if (current === null) {
      return;
    }

    let kthNode = current;
    while (current.next !== null) {
      current = current.next;
    }

    lastNode = current;

    // Set last node's next pointer to head
    lastNode.next = this.head;

    // Set head to the next of kth node
    this.head = kthNode.next;

    // Set kth node's next pointer to null
    kthNode.next = null;
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original list:");
list.print(); // Output: 1 -> 2 -> 3 -> 4 -> 5

list.leftShift(2);

console.log("Left-shifted list by 2 nodes:");
list.print(); // Output: 3 -> 4 -> 5 -> 1 -> 2
