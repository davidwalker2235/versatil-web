import React from "react";
import ItemsCarousel from "react-items-carousel";

const noOfItems = 4;
const noOfCards = 12;
const autoPlayDelay = 2000;
const chevronWidth = 40;

export default class AutoPlayCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    activeItemIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    return this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));
  };

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          numberOfCards={2}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div style={{ height: 200, background: "#EEE" }}>First card</div>
          <div style={{ height: 200, background: "#EEE" }}>Second card</div>
          <div style={{ height: 200, background: "#EEE" }}>Third card</div>
          <div style={{ height: 200, background: "#EEE" }}>Fourth card</div>
        </ItemsCarousel>
      </div>
    );
  }
}
