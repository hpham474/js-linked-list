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
    size() {
        let size = 0;
        if (this.list === null) {
            return size;
        } else {
            let current = this.list;
            while (current !== null) {
                current = current.nextNode;
                size++;
            }
        }
        return size;
    }
    head() {
        return this.list;
    }
    tail() {
        let current = this.list;
        while(current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }
    at(index) {
        if(index < 0 || index > this.size()) {
            return -1;
        }
        let pos = 0;
        let current = this.list;
        while(current !== null && pos < index) {
            current = current.nextNode;
            pos++;
        }
        return current;
    }
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
        return string;
    }
}

export default LinkedList;