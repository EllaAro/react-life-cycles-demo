import React, { Component } from "react";

class B extends Component {
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
      val: "b",
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

  shouldComponentUpdate(nextProps, nextState) {
    /*
      UPDATING:
      recieves the updated props and state
      Dictates if the component should re-render or not
      By default, all class components will re-render if the props they recieve or state change
      Compare the exisiting state and prop with the next and decide if you want to re-render
      Performance optimazation
      DO NOT CAUSE SIDEEFFECTS HERE! (like HTTP requests) or use setState
    */
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    /*
        MOUNTING:
        When the state of the component depends on changes in props over time.
        Set the state
        does not have access to the 'this' keyword
        can't use setState so instead you return a new object representing the new state
        DO NOT CAUSE SIDEEFFECTS HERE! (like HTTP requests)
        UPDATING:
        Called everytime a component is re-rendered
        Used when the state depends on the props of the component
        DO NOT CAUSE SIDEEFFECTS HERE! (like HTTP requests)
        rarely used
    */
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    /*
        UPDATING:
        Called right before the changes from the virtual DOM are reflected to the DOM
        Capture some information from the DOM. For example: read the user's scroll position and after
        the update keep the scroll position after some calculation.
        Method will either return null or return a value. 
        Retured value will be passed as the third parameter to the next method. 
      */
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /*
        UPDATING:
        Called after the render is finished in the re-render cycles
        Cause side-effects
        Compare the previous props and previous state and then decide if cause side-effects
      */
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
    return <h2>Hi Im Lifecycle B!</h2>;
  }
}

export default B;
