import React from "react";
import PropTypes from "prop-types";

export const Card = ({ categories, letter, isActive, isLocked }) => {
  const isHidden = !isActive && !isLocked;

  return (
    <div className={`card ${isHidden && "hidden"} ${isLocked && "opacity-50"}`}>
      <ol className="p-8">
        {categories.map((category, index) => (
          <li key={category} className="mb-16">
            <label>
              {index + 1}. {category}
              <br />
              <div className="inline-flex items-center mt-8">
                <input
                  type="text"
                  placeholder={letter}
                  className="w-full border"
                  readOnly={isLocked}
                />
                {isLocked && <input type="checkbox" className="ml-4" />}
              </div>
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
