import { LinkedList } from "./linkedlist/LinkedLilst.js";

const linkedList: LinkedList<number> =LinkedList.fromValues(1, 2, 3);

linkedList.print();

linkedList.insertAt(2, 4);

linkedList.print();



