package javap;

class Node {

  int data;
  Node next;

  public Node(int data) {
    this.data = data;
    this.next = null;
  }
}

public class LinkedList {

  Node head;

  public Node getLinkedList() {

    Node root = new Node(10);
    this.head = root;
    Node n2 = new Node(10);
    root.next = n2;
    Node n3 = new Node(10);
    n2.next = n3;
    Node n4 = new Node(10);
    n3.next = n4;
    Node n5 = new Node(10);
    n4.next = n2;
    Node n6 = new Node(10);
    n5.next = n6;

    return this.head;
  }

}
