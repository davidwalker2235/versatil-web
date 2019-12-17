import React, { Component } from "react";

export class Subscriber extends Component {
  componentDidMount() {
    this.props.subscribe();
  }

  componentWillUnmount() {
    if (this.props.unsubscribe) {
      this.props.unsubscribe();
    }
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {this.props.children || null}
      </div>
    );
  }
}
