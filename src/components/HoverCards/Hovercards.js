import React, { Component } from "react";
import { HoverCard } from "react-png-hovercard";
import "./HoverCards.css";

class Hovercard extends Component {
  render() {
    return (
      <div style={{ width: "30%" }}>
        <HoverCard
          maxWidth={400}
          animationSpeed={500}
          height={300}
          margin={10}
          front={
            <div className="front">
              <img
                src="https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80"
                alt=""
                style={{ objectFit: "cover", width: "inherit" }}
              />
            </div>
          }
          back={
            <div className="back">
              <p> I would do anything to be there</p>
            </div>
          }
        />
      </div>
    );
  }
}

export default Hovercard;
