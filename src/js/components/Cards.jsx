import React from "react";
import PropTypes from "prop-types";

export const Card = ({ letter, categories, isVisible }) => (
  <div className="card" style={{ display: isVisible ? "block" : "none" }}>
    <span className="letter">{letter}</span>
    <ol>
      {categories.map(category => (
        <li key={category}>{category}</li>
      ))}
    </ol>
  </div>
);

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};
