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

        UPDATING:
        A getderivedstatefromprops
        A shouldComponentUpdate
        A render
        B getderivedstatefromprops
        B shouldComponentUpdate
        B render
        B getSnapshotBeforeUpdate
        A getSnapshotBeforeUpdate
        B componentDidUpdate
        A componentDidUpdate

        UNMOUNTING:
        componentWillUnmount 
            method is invoked immediately before a component is unmounted and destroyed
            Cancelling any network requests, removing event handlers, cancelling any
            subscriptions and also invalidating timers.
            DO NOT CALL SETSTATE METHOD because a component will never re-render after it's unmounted
        ERROR HANDLING:
        static getDerivedStateFromError(error)
        componentDidCatch(error,info)
            these two methods are called when there is an error either during rendering,
            in a lifecycle method, or in the cosntructor of any child component

      */
    return <A />;
  }
}

export default App;
