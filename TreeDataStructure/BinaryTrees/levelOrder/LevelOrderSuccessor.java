package levelOrder;

import java.util.LinkedList;
import java.util.Queue;

public class LevelOrderSuccessor {

    public static Node lvlOrderSuccessor( Node root, int key ) {
        Queue<Node> queue = new LinkedList<>();
        queue.offer( root );
        while ( !queue.isEmpty()) {
            Node temp = queue.poll();
            if( temp.left != null ) queue.offer( temp.left);
            if( temp.right != null ) queue.offer( temp.right );

            if( temp.data == key ) break;
        }

        return queue.peek();
    }

    public static void main(String[] args) {
        Node root = BinaryTree.getSimpleBinaryTree();
        Node successor = lvlOrderSuccessor( root, 5);
        System.out.println( successor.data );
    }
}
