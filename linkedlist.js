class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        return curr;
    }

    at(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let currIndex = 0;
        let curr = this.head;
        while (curr.next) {
            if (index === currIndex) {
                return curr;
            }
            currIndex++;
            curr = curr.next;
        }
    }

    pop() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            const value = this.head.value;
            this.head = null;
            this.size = 0;
            return value;
        }
        let prev = null;
        let curr = this.head;

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        const value = curr.value;
        prev.next = null;
        this.size--;
        return value;
    }

    contains(value) {
        if (this.size < 1) {
            return false;
        }
        let curr = this.head;
        while (curr.next) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    find(value) {
        let curr = this.head;
        let currIndex = 0;
        while (curr) {
            if (curr.value === value) {
                return currIndex;
            }
            curr = curr.next;
            currIndex++;
        }
        return null;
    }

    toString() {
        let string = "";
        let curr = this.head;
        while(curr) {
            if (curr.next) {
                string += `( ${curr.value} ) -> `
                curr = curr.next;
            } else {
                string += `( ${curr.value} ) -> null`
                break;
            }
        }
        return string;
    }

    insertAt(index, value) {
        if (index < 0 || index >= this.size) {
            return ;
        }
        let currIndex = 0;
        let curr = this.head;
        let prev;
        while (currIndex < index) {
            prev = curr;
            curr = curr.next;
            currIndex++;
        }
        const newNode = new Node(value, curr);
        prev.next = newNode;
        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return ;
        }
        let currIndex = 0;
        let curr = this.head;
        let prev;
        while (currIndex < index) {
            prev = curr;
            curr = curr.next;
            currIndex++;
        }
        prev.next = curr.next;
        this.size--;
    }
}