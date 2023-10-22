package com.binaryTrees.hard;

import com.binaryTrees.BinaryTree;
import com.binaryTrees.TreeNode;

import java.util.ArrayList;
import java.util.List;

public class RootToNodePath {

    public static void main(String[] args) {
        RootToNodePath rnp = new RootToNodePath();
        BinaryTree bTree = new BinaryTree();
        TreeNode root = bTree.getBinaryTree();

        List< Integer > arr = new ArrayList<>();
        rnp.getPath( root, arr, 15);

        for( int i : arr ) {
            System.out.print(i + " ");
        }
        System.out.println();
    }

    public boolean getPath(TreeNode root, List< Integer > arr, int x ) {

        if( root == null ) return false;

        arr.add( root.data );

        if( root.data == x ) return true;

        if( getPath( root.left, arr, x) || getPath( root.right, arr, x )) {
            return true;
        }

        arr.remove( arr.size() - 1);
        return false;
    }
}
