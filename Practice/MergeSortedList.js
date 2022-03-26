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

var listOne = new LinkedList(1)
listOne = new LinkedList(2)
listOne = new LinkedList(3)
console.log(listOne, listOne.length)