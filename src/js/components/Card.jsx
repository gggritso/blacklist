import React from "react";
import PropTypes from "prop-types";

export const Card = ({ letter, categories, isVisible }) => (
  <div className={`card ${isVisible ? "" : "card--hidden"}`}>
    <span className="card__letter">{letter}</span>
    <ol className="card__categories">
      {categories.map(category => (
        <li key={category} className="card__category">
          <label className="card__category-label">
            {category}
            <input type="text" className="card__category-input" />
          </label>
        </li>
      ))}
    </ol>
  </div>
);

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};
