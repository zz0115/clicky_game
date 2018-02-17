import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
      <div className="game">
        <h1>Clicky Game</h1>
        <h2>Click an image to begin!</h2>
        <h2>Score: </h2> {props.score}
        <h2>Top Score: </h2> {props.topScore}
      </div>

      {/* mark as clicked when click */}
      <span onClick={() => props.countClick(props.id)} className="count"></span>
    </div>
  );

export default Header;
