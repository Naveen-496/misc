import { TreeNode } from "../../TreeNode";
import BinaryTree from "../../TreeNode";
import Pair from "./Pair";


class TopView {


  private topView( root: TreeNode | null, dist: number, level: number,  
    map: Map< number, Pair< number, number >> ): void {
       
     if( root === null ) {
      return;
     }

     if( !map.has(dist) || level < map.get( dist )!.second) {
       map.set( dist, Pair.of(root.data, level));
     }

     if( root.left !== null ) this.topView(root.left, dist - 1, level + 1, map);
     if( root.right !== null ) this.topView( root.right, dist + 1, level + 1, map);

     
  }
   
   getTopView( root: TreeNode | null ): Array<number> {
     
     const result: Array<number> = [];
     if( root === null) {
      return result;
     }

      const map: Map<number, Pair<number, number>> = new Map();
      this.topView( root, 0, 1, map);
       for( const value of map.values()) {
         result.push( value.first );
       }
      return result;
   }
}

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

const topView: TopView = new TopView();

console.log( topView.getTopView( root ));
