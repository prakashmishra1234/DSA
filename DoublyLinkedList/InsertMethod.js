//Doubly Linked list Insert method

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
    unshift(value){
            const newNode = new Node (value)
            if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    shift(){
        if(this.length === 0) return undefined
        let temp = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        if (index < this.length/2) {
            for (let i = 0; i < index; i++) { 
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) { 
                temp = temp.prev
            }
        }
        return temp
    }
    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }
    insert(index, value) {
        if(index < 0 || index > this.length) return false
        if(index === this.length) return this.push(value)
        if(index === 0) return this.unshift(value)
        
        const newNode = new Node(value)
        const before = this.get(index - 1)
        const after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return true
    }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
console.log('Original Doubly Linked List: ',myDoublyLinkedList)

myDoublyLinkedList.insert(2, 99)
console.log('new doubly linked list is: ', myDoublyLinkedList);