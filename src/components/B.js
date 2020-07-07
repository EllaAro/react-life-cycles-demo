import React, { PureComponent } from "react";

class B extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      val: "b",
    };
  }

  componentDidMount() {}

  render() {
    return <h2>Hi Im Lifecycle B!</h2>;
  }
}

export default B;
