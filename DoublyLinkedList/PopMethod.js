//Doubly Linked list Push method

class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value){
        const newNode = new Node (value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length === 0) return undefined
        let temp = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
console.log('Original Doubly Linked List: ',myDoublyLinkedList)

myDoublyLinkedList.pop()
console.log('New Doubly Linked List: ', myDoublyLinkedList)

myDoublyLinkedList.pop()
console.log('Second New Doubly Linked List: ', myDoublyLinkedList)

myDoublyLinkedList.pop()
console.log('Third New Doubly Linked List: ', myDoublyLinkedList)

let result = myDoublyLinkedList.pop()
console.log('When head and tail is null then Doubly Linked List: ', result)

