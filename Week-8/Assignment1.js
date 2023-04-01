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

  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Print the linked list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + (current.next ? ' -> ' : '');
      current = current.next;
    }
    console.log(result);
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log('Original list:');
list.print(); // Output: 1 -> 2 -> 3 -> 4

list.reverse();

console.log('Reversed list:');
list.print(); 
// Output: 4 -> 3 -> 2 -> 1






