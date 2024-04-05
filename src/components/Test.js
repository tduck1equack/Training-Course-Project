import React from "react";
export default class NameCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

NameCard.defaultProps = {
  name: "Test",
  description: "Id aliqua aliquip quis officia proident.",
};
