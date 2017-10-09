import React from "react";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import profilePic from "./hanamaru-chibi.png";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt="YayuP"
          style={{
            float: "right",
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2)
          }}
        />
        By{" "}
        <a href="https://twitter.com/datyayu" target="_blank" rel="noopener">
          <strong>YayuP</strong>
        </a>, an idol anime ota who loves to do live calls and losing money in
        gacha games.{" "}
        </p>
    );
  }
}

export default Bio;
