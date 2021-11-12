//Linked list Pop method

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
}

let myLinkedList = new LinkedList(8)
myLinkedList.push(2)
console.log('Linked list after adding item: ',myLinkedList);

myLinkedList.pop()
console.log('Linked list after removing item: ',myLinkedList);

myLinkedList.pop()
console.log('Linked list after removing all items: ',myLinkedList);

let result = myLinkedList.pop()
console.log('Linked list when 0 item is present: ',result);

/* 
    In the above code first the push method is used to creat a list of 2 items and the checked all three condition 
    when number of item is more than 1 and when number of item is one and when no. of item is 0.
*/