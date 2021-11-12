//Linked list Set method

class Node {
    constructor(value){
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
    push(value){
        const newNode = new Node (value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++){
            temp = temp.next
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
}

let myLinkedList = new LinkedList(11)
myLinkedList.push(3)
myLinkedList.push(23)
myLinkedList.push(7)
console.log('original Linked List: ',myLinkedList);

myLinkedList.set(1, 4)
console.log('New Linked List: ', myLinkedList)

/*
    In this code first the linked list is created and then changed the value of
    index 1 which is 3 to new value which is 4
*/