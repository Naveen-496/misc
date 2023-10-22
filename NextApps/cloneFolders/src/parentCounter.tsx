import React from "react";

export type ChildCounterProps = {
 
  handleChangeCounter( amt: number): void;
  handleChangeHeader( header: string): void;
}

export type ParentState = {
  count: number;
}

export default class ParentCounter extends React.Component<{},ParentState > {
   
   

  render(): React.ReactNode {
      
     return (
       <div>
           
       </div>
     );
  }
   
}