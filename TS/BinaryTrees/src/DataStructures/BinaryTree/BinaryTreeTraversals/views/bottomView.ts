import { TreeNode } from "../../TreeNode";
import BinaryTree from "../../TreeNode";
import Pair from "./Pair";


class BottomView {
   
  private bottomView( root: TreeNode | null, dist: number, level: number, 
                map: Map< number, Pair<number, number >>): void {
                   
                  if( root === null ) {
                    return;
                  }

                  if( !map.has( dist ) || map.get( dist )!.second <= level ) {
                    map.set( dist, Pair.of( root.data, level ));
                  }

                  this.bottomView( root.left, dist - 1, level + 1, map);
                  this.bottomView( root.right, dist + 1, level + 1, map);

                }

      getBottomView(root: TreeNode | null ) {
         const result: Array< number > = new Array();

          if( root === null ) return result;

         const  map: Map<number, Pair<number, number>> = new Map();

         this.bottomView( root, 0, 1, map);

         for( const value of map.values() ) {
            result.push( value.first );
         }

         return result;
      }          
}

const bottomView: BottomView = new BottomView();

const binaryTree: BinaryTree = new BinaryTree(); 
const root: TreeNode = binaryTree.getBinary();

console.log(bottomView.getBottomView( root ));

