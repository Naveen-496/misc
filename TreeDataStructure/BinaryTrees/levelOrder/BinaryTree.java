package levelOrder;

public class BinaryTree {

    public static Node getSimpleBinaryTree() {
        Node root = new Node(1);
             root.left = new Node( 2 );
             root.right = new Node( 3);

             root.left.left = new Node( 4 );
             root.left.right = new Node( 5);

             root.right.left = new Node ( 6 );
             root.right.right = new Node( 7);

             return  root;
    }

}

class Node {

     int data;
     Node left;
     Node right;

     public Node( int data ) {
         this.data = data;
         this.left = this.right = null;
     }
}