import React, { Component } from "react";
import { HoverCard } from "react-png-hovercard";
import "./HoverCards.css";

class Hovercard extends Component {
  render() {
    return (
      <div>
        <HoverCard
          animationSpeed={500}
          margin={10}
          borderRadius={0}
          front={
            <div className="front" style={{ width: "inherit" }}>
              <img
                src={
                  "https://scontent.fbcn1-1.fna.fbcdn.net/v/t1.0-9/p960x960/76183520_751409405377328_1132063773322903552_o.jpg?_nc_cat=100&_nc_ohc=MFvImdBVPpgAQm_Mv-O6Tqn5d2XBYEUmlWGk-H2nl_UbvKXl7daOLfzyQ&_nc_ht=scontent.fbcn1-1.fna&oh=a8e0e78efbe8314baeb76de20e275d5b&oe=5EB06F80"
                }
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
