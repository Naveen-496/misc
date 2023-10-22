class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);

    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(data) {
    if (this.length == 0) {
      return;
    }
    if (this.head.data == data) {
      if (this.length == 1) {
        this.tail = null;
      }
      this.head = this.head.next;
      this.length--;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.data == data) {
          if (current.next == this.tail) {
            this.tail = current;
          }
          current.next = current.next.next;
          this.length--;
        }
        current = current.next;
      }
    }
  }

  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data == data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getNodeAtIndex(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index == 0) {
      this.append(data);
      return;
    }

    if (index == this.length) {
      this.prepend(data);
      return;
    }

    const current = this.getNodeAtIndex(index - 1);
    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length) {
      return;
    }

    if (index == 0) {
      this.head = this.head.next;
      this.length--;
      if (this.length == 0) {
        this.tail = null;
      }
      return;
    }
  }

  traverseList(head, callback) {
    if (head == null) return;

    let current = head;
    while (current != null) {
      callback(current);
      current = current.next;
    }
  }
}

function callback(node) {
  console.log(node.data);
}

const linkedList = new LinkedList();
linkedList.prepend(5);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.prepend(1);

linkedList.traverseList(linkedList.head, callback);

linkedList.delete(1);
linkedList.traverseList(linkedList.head, callback);
