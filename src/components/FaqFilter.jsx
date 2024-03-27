import React from "react";
const FaqFilter = ({ faqCategories, selectedCategory, onCategoryClick }) => (
  <div className="flex flex-wrap justify-center items-center gap-8 my-12">
    {faqCategories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => onCategoryClick(category)}
        className={`text-black/80 font-medium py-2 px-4 min-w-28 ${
          selectedCategory === category ? "pink__gradient text-white" : ""
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);
export default FaqFilter;
