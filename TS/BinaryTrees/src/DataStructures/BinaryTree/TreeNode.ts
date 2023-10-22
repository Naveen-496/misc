
class TreeNode {

   data: number
   left: TreeNode | null
   right: TreeNode | null

   constructor(data? : number  ) {
     this.data = data === undefined ? 0 : data;
     this.left = null;
     this.right = null;
   }
}

class BinaryTree {


   
   constructor() {

   }

   getBinaryTreeForPreOrder() {
     
    const root: TreeNode = new TreeNode(1);
     root.left = new TreeNode(2);
     root.right = new TreeNode(3);

     root.left.left = new TreeNode(4);
     root.left.right = new TreeNode(5);

     root.right.left = new TreeNode(6);
     root.right.right = new TreeNode(7);
   }

   getBinary = function(): TreeNode {
     const root: TreeNode = new TreeNode(1);
     root.left = new TreeNode(2);
     root.right = new TreeNode(3);

     root.left.left = new TreeNode(4);
     root.left.right = new TreeNode(5);

     root.right.left = new TreeNode(6);
     root.right.right = new TreeNode(7);

     root.right.right.right = new TreeNode(8);
     root.right.right.right.right = new TreeNode(9);


     return root;
   }

   getSmallBinaryTree = function(): TreeNode {
    const root: TreeNode = new TreeNode(10);
    root.left = new TreeNode(60);
    root.right = new TreeNode(30);
    root.left.left = new TreeNode(45);

    return root;
   }
  
  }

export default BinaryTree;
export {TreeNode}