package com.binaryTrees.inorder;


// given two binary trees check if they are equal or not
// two binary trees are equal if they have same structure and content

/*

Given the root of two binary trees, x and y, check if x is identical to y. Two binary trees are identical if they have identical structure and their contents are also the same.

Input:
		   1						1
		 /   \					  /   \
		/	  \					 /	   \
	   2	   3				2		3
	  /	\	  / \			   / \	   / \
	 /	 \ 	 /	 \			  /	  \	  /	  \
	4	  5	6	  7			 4	   5 6	   7

Output: true
Explanation: Both binary trees have the same structure and contents.

Input:
		   1						1
		 /   \					  /   \
		/	  \					 /	   \
	   2	   3				2		3
	  /	\	  / \			   / \	   /
	 /	 \ 	 /	 \			  /	  \	  /
	4	  5	6	  7			 4	   5 6

Output: false
Explanation: Both binary trees have different structures.

Input:
		   1						1
		 /   \					  /   \
		/	  \					 /	   \
	   2	   3				2		3
	  /	\	  / \			   / \	   / \
	 /	 \ 	 /	 \			  /	  \	  /	  \
	4	  5	6	  7			 4	   5 6	   8

Output: false
Explanation: Both binary trees have the same structure but differ in nodes' values.

*/

import com.binaryTrees.BinaryTree;
import com.binaryTrees.Pair;
import com.binaryTrees.TreeNode;

import java.util.ArrayDeque;
import java.util.Deque;

public class TwoBinaryTreesEqual {

    public boolean isIdentical(TreeNode x, TreeNode y) {
        // if both nodes are null or empty then they are identical return true
        if(x == null && y == null){
            return true;
        }

        // if both trees are non-empty and the value of their root node matches,
        // recur for their left and right subtree
        return (x != null && y != null) && (x.data == y.data)
                && isIdentical(x.left, y.left)
                && isIdentical(x.right , y.right);


    }

    public boolean isIdenticalIter(TreeNode x, TreeNode y) {

        // if both nodes are null or empty then they are identical return true
        if(x == null && y == null) {
            return true;
        }
        // if only one is empty then return false since they are not identical
        if(x == null || y == null) {
            return false;
        }

        Deque<Pair<TreeNode, TreeNode>> stack = new ArrayDeque<>();
        stack.add(Pair.of(x, y));

        while( !stack.isEmpty() ) {

            Pair<TreeNode, TreeNode> pair = stack.peekLast();
            x = pair.first;
            y = pair.second;

            stack.pollLast();

            // if their content is not same return false
            if(x.data != y.data) {
                return false;
            }

            if(x.left != null && y.left != null) {
                stack.add(Pair.of(x.left, y.left));
            } else if(x.left != null || y.left != null) {
                return false;
            }

            if(x.right != null && y.right != null) {
                stack.add(Pair.of(x.right, y.right));
            } else if(x.right != null || y.right != null) {
                return false;
            }

        }

        // if we reach here then both trees are identical
        return true;
    }

    public static void main(String[] args) {

        BinaryTree binaryTree = new BinaryTree();
        TreeNode x = binaryTree.getBinaryTree();
        TreeNode y = binaryTree.getAnotherBinaryTree();

        TwoBinaryTreesEqual twr = new TwoBinaryTreesEqual();
        System.out.println(twr.isIdenticalIter(x, y));

    }
}
