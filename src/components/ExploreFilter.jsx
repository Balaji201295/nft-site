import React from "react";

const ExploreFilter = ({
  allCategories,
  selectedCategory,
  onCategoryClick,
}) => {
  return (
    <div className="flex flex-wrap justify-start gap-8 my-12">
      {allCategories.map((category) => (
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
};
export default ExploreFilter;
