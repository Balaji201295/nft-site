import React, { useState } from "react";
import { TrendingCards, ExploreFilter } from "../components";
import { arts } from "../constants";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import styles from "../style";

const allCategories = ["All", ...new Set(arts.map((art) => art.category))];

const Explore = ({ showFilter = true }) => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDisplayCount(8);
  };

  const getSortedArts = () => {
    switch (selectedOption) {
      case "option1": // Recently Added (Latest Date)
        return arts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      case "option2": // Oldest (Last Date)
        return arts.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
      case "option3": // Sort randomly by generating random numbers
        return arts.slice().sort(() => Math.random() - 0.5);

      default:
        return arts;
    }
  };

  const sortedArts = getSortedArts();

  const isDiscoverMoreVisible = displayCount < sortedArts.length;

  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="flex flex-col ss:flex-row gap-12 ss:gap-0 justify-between items-center mb-4 sm:mb-12 relative">
        <h2 className={styles.heading}>
          <span>Explore</span>
        </h2>
        <div className="relative">
          <select
            id="mySelect"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="appearance-none border text-sm font-medium border-black/70 rounded-full py-2 px-4 pr-8 bg-white leading-tight focus:outline-none focus:border-black/60"
          >
            <option value="option1">Recently Added</option>
            <option value="option2">Oldest</option>
            <option value="option3">Popular</option>
          </select>

          {/* Arrow icon for the dropdown */}
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            {isDropdownOpen ? (
              <FaCaretDown className="text-gray-600" />
            ) : (
              <FaCaretUp className="text-gray-600" />
            )}
          </div>
        </div>
      </div>

      {showFilter && (
        <ExploreFilter
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      )}

      <div className="w-full grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-6">
        {sortedArts
          .filter((art) =>
            selectedCategory !== "All"
              ? art.category === selectedCategory
              : true
          )
          .slice(0, displayCount)
          .map((art) => (
            <TrendingCards key={art.id} {...art} />
          ))}
      </div>
      {isDiscoverMoreVisible && (
        <div className="w-full py-8 text-center">
          <button
            onClick={() => setDisplayCount((prev) => prev + 4)}
            className="text-[16px] leading-[24px] border border-solid border-black font-bold rounded-full py-2 px-4"
          >
            Discover More
          </button>
        </div>
      )}
    </section>
  );
};
export default Explore;
