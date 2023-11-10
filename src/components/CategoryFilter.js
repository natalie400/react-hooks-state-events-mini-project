import React from "react";

import { CATEGORIES } from "../data";

function CategoryFilter({ categories }) {
 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {categories.map((category) => (
        <button key={category}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
