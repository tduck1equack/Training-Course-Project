import React from "react";

export default class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }
  static getDerivedStateFromError(error) {
    // return this.setState({ isError: true });
  }
  componentDidCatch(error, info) {
    console.log(error, info.componentStack);
  }
  render() {
    const { isError } = this.state;
    const { children, fallback } = this.props;

    if (isError) {
      return fallback;
    }
    return children;
  }
}
