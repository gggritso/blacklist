import React from "react";
import PropTypes from "prop-types";

export const Card = ({ letter, categories, isActive, isLocked }) => (
  <div
    className={`card ${isActive ? "card--active" : "card--hidden"} ${
      isLocked ? "card--locked" : ""
    }`}
  >
    <span className="card__letter">{letter}</span>
    <ol className="card__categories">
      {categories.map(category => (
        <li key={category} className="card__category">
          <label className="card__category-label">
            {category}
            <input
              type="text"
              className="card__category-input"
              readOnly={isLocked}
            />
          </label>
        </li>
      ))}
    </ol>
  </div>
);

Card.propTypes = {
  letter: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
  isLocked: PropTypes.bool
};
