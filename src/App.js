import React, { PureComponent } from "react";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
    };
  }

  render() {
    return <h1>hi</h1>;
  }
}

export default App;
