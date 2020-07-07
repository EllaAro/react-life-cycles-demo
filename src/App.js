import React, { PureComponent } from "react";
import A from "./components/A";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
    };
  }

  render() {
    /*
        The order of rendering:
        MOUNTING:
        A constructor
        A getderivedstatefromprops
        A render
        B construcor
        B getderivedstatefromprops
        B render
        B componentDidMount
        A componentDidMount
      */
    return <A />;
  }
}

export default App;
