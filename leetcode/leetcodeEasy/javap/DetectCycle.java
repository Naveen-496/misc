package javap;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class DetectCycle {

  public static boolean isCycle(Node head) {

    Set<Node> nodes = new HashSet<>();

    Node curr = head;
    while (curr != null) {

      if (nodes.contains(curr)) {
        return true;
      }
      nodes.add(curr);
      curr = curr.next;
    }

    return false;
  }

  public static boolean isCycleByUsingMap(Node head) {

    Map<Node, Integer> nodeMap = new HashMap<>();
    Node curr = head;
    while (curr != null) {

      if (nodeMap.containsKey(curr)) {
        return true;
      }
      nodeMap.put(curr, 0);
    }

    return false;
  }

  public static void main(String[] args) {

    LinkedList linkedList = new LinkedList();
    Node head = linkedList.getLinkedList();
    System.out.println(isCycleByUsingMap(head));

  }
}