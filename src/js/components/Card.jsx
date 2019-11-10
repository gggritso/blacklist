import React from "react";
import PropTypes from "prop-types";

export const Card = ({ categories, isActive, isLocked }) => {
  const isHidden = !isActive && !isLocked;

  return (
    <div className={`card ${isHidden && "hidden"} ${isLocked && "opacity-50"}`}>
      <ol className="p-8 pl-16 list-decimal">
        {categories.map(category => (
          <li key={category} className="mb-16">
            <label>
              {category}
              <br />
              <input
                type="text"
                className="w-full mt-8 border"
                readOnly={isLocked}
              />
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
};

Card.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool,
  isLocked: PropTypes.bool
};
