//Linked list constructor 

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}

let myLinkedList = new LinkedList(4)
console.log(myLinkedList)
console.log(myLinkedList.length);

/*
In the above code line 17 calls the class linkedlist and the new keyword calls
the constructor of the class Linkedlist
And the Node in line 10 calls the class node and new keyword calls constructor
the class node.

In the above class head and tail point to the same thing
*/
