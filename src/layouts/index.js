import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";
import "../css/post.css";

import { rhythm, scale } from "../utils/typography";

const IndexHeader = (
  <h1
    style={{
      ...scale(1.5),
      marginBottom: rhythm(1.5),
      marginTop: 0,
      textAlign: "center"
    }}
  >
    <Link
      style={{
        boxShadow: "none",
        textDecoration: "none",
        color: "inherit",
        borderColor: "blue"
      }}
      to={"/"}
    >
      YayuP's log
    </Link>
  </h1>
);

const PostHeader = (
  <h2
    style={{
      textAlign: "center",
      marginTop: 0,
      marginBottom: rhythm(1)
    }}
  >
    <Link
      style={{
        boxShadow: "none",
        textDecoration: "none",
        color: "inherit"
      }}
      to={"/"}
    >
      YayuP
    </Link>
  </h2>
);

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const header = location.pathname === "/" ? IndexHeader : PostHeader;

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {children()}
      </Container>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
};

export default Template;
