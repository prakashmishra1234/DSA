//Linked List Push Method

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
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4)
console.log(myLinkedList);

/*
    In this method if linked list does not exist then the head and tail ponts to same item in the 
    list created by newNode method if linked list exist then the value of next in tail will points to 
    newNode and then tail will shift to new element added and length of the list will increase by 1
    and then it will return entire list by calling retunrn menthod 
*/
