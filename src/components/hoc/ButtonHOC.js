import React from "react";

const ButtonHOCFunction = (BaseComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = (e) => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("Incremented!");
    };
    render() {
      return (
        <BaseComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return NewComponent;
};

export default ButtonHOCFunction;
