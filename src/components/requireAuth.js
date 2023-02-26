import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildrenComponents) => {
  class ComposedComponent extends Component {
    // Our Components just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildrenComponents {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.auth.authenticated,
    };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
