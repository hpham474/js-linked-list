class LinkedList {
    list;
    constructor() {
        this.list = null;
    }
    append(value) {
        if (this.list === null) {
            this.list = value;
        } else {
            let current = this.list;
            while(current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = value;
        }
    }
    prepend(value) {}
    size() {}
    head() {}
    tail() {}
    at(index) {}
    pop() {}
    contains(value) {}
    find(value) {}
    insertAt(value, index) {}
    removeAt(index) {}
    toString() {}
}

export default LinkedList;