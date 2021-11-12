//Linked list get method 

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
        temp.next = null
        return temp;
    }
    get(index){
        if(index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp
    }
}

let myLinkedList = new LinkedList(0)
    myLinkedList.push(1)
    myLinkedList.push(2)
    myLinkedList.push(3)
console.log("The required list is: ",myLinkedList)

let result = myLinkedList.get(2);
console.log('The item at index 2 is: ',result);

/*
    In this code fist creating a linked list of 4 index and then finding the value of index at index value 2
*/