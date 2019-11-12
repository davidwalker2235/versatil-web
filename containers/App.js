import React, { Component } from "react";
import Counter from "../components/Counter";
import Color from "../components/Color";

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Color />
      </div>
    );
  }
}
