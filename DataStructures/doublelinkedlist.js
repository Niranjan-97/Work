function createNode(value){
    return {
        value: value,
        prev:null,
        next:null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }
    insert(value){
        this.length++;
        let newnode = createNode(value);
        if(this.tail){
            // if list is not empty
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
            return newnode;
        }
        this.head = this.tail = newnode;
        return newnode;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(`prev:${current.prev?.value}, current:${current.value}, next:${current.next?.value}`);
            current = current.next;
        }
    }

}

const doubleLinkedList = new DoubleLinkedList();
const num= BigInt(5000000);
for(let i = 0;i < num;i++){
    if(i%2 != 0){
        doubleLinkedList.insert(i);
    }
}
console.log(doubleLinkedList);
//doubleLinkedList.print();
