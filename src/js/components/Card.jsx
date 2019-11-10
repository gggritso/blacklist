import React from "react";
import PropTypes from "prop-types";

export const Card = ({ categories, isActive, isLocked }) => (
  <div
    className={`card ${isActive ? "card--active" : "card--hidden"} ${
      isLocked ? "card--locked" : ""
    }`}
  >
    <ol className="card__categories">
      {categories.map(category => (
        <li key={category} className="card__category">
          <label className="card__category-label-wrapper">
            {category}
            <br />
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
  isLocked: PropTypes.bool
};
