import React, { Component, Fragment } from "react";
import B from "./B";

class A extends Component {
  constructor(props) {
    /* 
        MOUNTING:
        A special function that will get called whenever a new component is being created.
        Initializing state
        Binding the event handlers
        super(props) directly overwrites this.state
        DO NOT CAUSE SIDEEFFECTS HERE! (like HTTP requests)
    */

    super(props);
    this.state = {
      val: "a",
    };
  }

  componentDidMount() {
    /*
        MOUNTING:
        Called only once in the whole life cycle of a component.
        Invoked immediately after a component and all its children components have been rendered to the DOM
        Perfect place to cause side-effects: Iteract with the DOM or perform any ajax calls to load data.

      */
  }

  static getDerivedStateFromProps(props, state) {
    /*
        MOUNTING:
        When the state of the component depends on changes in props over time.
        Set the state
        does not have access to the 'this' keyword
        can't use setState so instead you return a new object representing the new state
        DO NOT CAUSE SIDEEFFECTS HERE! (like HTTP requests)
    */
    return null;
  }

  render() {
    /*
        MOUNTING:
        The only required method.
        Read props & state and returns JSX
        A pure function, should always render the same UI
        Children components lifecycle methods are also being executed
        DO NOT CHANGE STATE OR INTERACT WITH DOM OR MAKE AJAX CALLS
    */
    return (
      <Fragment>
        <h2>Hi Im Lifecycle A!</h2>
        <B />
      </Fragment>
    );
  }
}

export default A;
