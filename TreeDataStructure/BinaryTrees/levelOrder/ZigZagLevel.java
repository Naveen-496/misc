package levelOrder;


import java.util.*;

public class ZigZagLevel {

    public static void zigzagLvl( Node root ) {
//        Queue<Node> queue = new LinkedList<>();
        Deque<Node> deque = new ArrayDeque<>();
        deque.offerFirst( root );
        boolean zigzag = false;
        while (!deque.isEmpty()) {

            int levelSize = deque.size();

            for ( int i = 0; i < levelSize; i++ ) {
              //  System.out.println( zigzag );

                if( !zigzag ) {
                    Node temp = deque.pollFirst();

                    System.out.print( temp.data + " ");

                    if( temp.left != null ) deque.offerLast( temp.left);
                    if( temp.right != null ) deque.offerLast( temp.right);

                } else {
                  Node temp = deque.pollLast();

                    System.out.print( temp.data + " ");
                    if( temp.right != null ) deque.offerFirst( temp.right);
                    if( temp.left != null ) deque.offerFirst( temp.left);
                }

            }
            zigzag = !zigzag;
        }
    }

    public static void main(String[] args) {

        Node root = BinaryTree.getSimpleBinaryTree();
        zigzagLvl( root );

    }
}
