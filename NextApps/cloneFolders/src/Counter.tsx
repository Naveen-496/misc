import React from "react";

type CounterProps = {
  header: string;
}

type CounterState = {
  count: number;
}



export default class Counter extends React.Component<CounterProps, CounterState> {
   
    state: CounterState = {
      count: 0
    }

    props: CounterProps = {
      header: "Child"
    }

    handleClick = ( amt: number): void => {
      // this.setState((state) => ({
      //   count: state.count + amt
      // }));

      const { count } = this.state;
      this.setState( { count: count + 1});
    }

    render(): React.ReactNode {
         const { header } = this.props;
         const { count } = this.state;
       return (
          <div>
              <div>Header: <h1>{header}</h1> </div>
              <br />
             <button onClick={ () => this.handleClick(1)}>count: {count}</button>
          </div>
       )
    }
}