import React from "react";
import PropTypes from "prop-types";

export const Card = ({ categories, isActive, isLocked }) => {
  const isHidden = !isActive && !isLocked;

  return (
    <div className={`card ${isHidden && "hidden"} ${isLocked && "opacity-50"}`}>
      <ol className="p-1 pl-10 list-decimal">
        {categories.map(category => (
          <li key={category} className="mb-2">
            <label>
              {category}
              <br />
              <input
                type="text"
                className="w-full mt-1 border"
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
