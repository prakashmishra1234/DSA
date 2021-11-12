//Linked list shift method 

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
    shift(){
        if(!this.head) return undefined;
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp;
    }
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
console.log(myLinkedList)

myLinkedList.shift()
console.log('List after removing first element: ', myLinkedList);

myLinkedList.shift()
console.log('List after removing both element: ', myLinkedList);

let result3 = myLinkedList.shift()
console.log('List when head is already null: ', result3);

/*
    In this code first created list of two elements. and then checked all three condition 
    when the list is emplty when we have only one item in the list and when we have more than one 
    item in the list
*/

