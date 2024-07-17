import Node from "./Node.mjs";

class LinkedList {
    list;
    constructor() {
        this.list = null;
    }
    append(value) {
        const node = new Node();
        node.value = value;

        if (this.list === null) {
            this.list = node;
        } else {
            let current = this.list;
            while(current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = node;
        }
    }
    prepend(value) {
        const node = new Node();
        node.value = value;

        if (this.list === null) {
            this.list = node;
        } else {
            node.nextNode = this.list;
            this.list = node;
        }
    }
    size() {}
    head() {}
    tail() {}
    at(index) {}
    pop() {}
    contains(value) {}
    find(value) {}
    insertAt(value, index) {}
    removeAt(index) {}
    toString() {
        let current = this.list;
        let string = "";
        while (current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        string += "null ";
        console.log(string);    
    }
}

export default LinkedList;