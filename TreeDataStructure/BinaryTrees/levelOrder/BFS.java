package levelOrder;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class BFS {

    public static List<Double> bfsLevelAvg( Node root ) {
        List<Double> result = new ArrayList<>();
        if( root == null ) return result;
        Queue<Node> queue = new LinkedList<>();

        queue.offer( root );
        while ( !queue.isEmpty()) {

            double sum = 0;
            int levelSize = queue.size();
            for ( int i = 0; i < levelSize; i++ ) {
                Node temp = queue.poll();
                sum += temp.data;
                if( temp.left != null ) queue.offer( temp.left);
                if( temp.right != null ) queue.offer( temp.right );
            }
            sum = sum / levelSize;
            result.add( sum );
        }
        return result;
    }

    public static List<List<Integer>> bfs2( Node root) {
        List<List<Integer>> result = new ArrayList<>();
        Queue<Node> queue = new LinkedList<>();
        queue.offer( root );

        while ( !queue.isEmpty() ) {

            int levelSize = queue.size();
            List<Integer> subList = new ArrayList<>(levelSize);
            for ( int i = 0; i < levelSize; i++ ) {
               Node temp = queue.poll();
               subList.add( temp.data );
               if( temp.left != null ) queue.add( temp.left);
               if ( temp.right != null) queue.add( temp.right);
            }
            result.add( subList );
        }
        return result;
    }

    public static List<Integer> bfs(Node root) {

        Queue<Node> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {

            Node temp = queue.poll();
            result.add(temp.data);
            if (temp.left != null) {
                queue.offer(temp.left);
            }
            if (temp.right != null) {
                queue.offer(temp.right);
            }
        }

        return result;
    }

    public static void main(String[] args) {

        Node root = BinaryTree.getSimpleBinaryTree();
        List<Integer> result = bfs( root );
        for ( int i : result ) {
            System.out.print(i + " ");
        }
        System.out.println();

        List<List<Integer>> result2 = bfs2( root );
        System.out.println( result2);

        List<Double> avgList = bfsLevelAvg( root );
        System.out.println( avgList );

    }
}
