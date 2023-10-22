class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T, next: Node<T> | null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;
  length: number;

  static fromValues: <T>(...values: T[]) => LinkedList<T>;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data: T): Node<T> | null {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;

    return newNode;
  }

  insertAt(index: number, value: T): Node<T> | null {
    if (index === 0) {
      return this.insertAtHead(value);
    }
    const prevNode = this.getByIndex(index - 1);
    if (prevNode === null) {
      return null;
    }

    prevNode.next = new Node(value, prevNode.next);
    this.length++;

    return prevNode.next;
  }

  removeFirst(): Node<T> | null {
    if (!this.head) {
      return null;
    }

    this.head = this.head.next;
    return this.head;
  }

  removeAt(index: number): void {
    const node = this.getByIndex(index);
    const prevNode = this.getByIndex(index - 1);
    if (node === null || prevNode === null) {
      return;
    }
    prevNode.next = node.next!;
  }

  getByIndex(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }
    console.log(this.head);
    let current: Node<T> | null = this.head;

    for (let i = 0; i < index; i++) {
      current = current!.next;
      console.log("index " + i + " " + current?.data);
    }

    return current;
  }

  print() {
    let output: string = "";
    let current: Node<T> | null = this.head;

    while (current) {
      output = `${output}${current.data} --> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

LinkedList.fromValues = function <T>(...values: T[]): LinkedList<T> {
  const ll: LinkedList<T> = new LinkedList<T>();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }

  return ll;
};
