import React, { useState } from "react";
import { FaqFilter, SearchForm } from "../components";
import { faq } from "../constants";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import styles from "../style";

const faqCategories = ["All", ...new Set(faq.map((item) => item.category))];
console.log(faqCategories);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveIndex(null); // Reset activeIndex when a new category is selected
  };

  const toggleClick = (index) =>
    setActiveIndex(index === activeIndex ? null : index);

  // Filter FAQ based on selected category or show all if category is "All"
  const filteredFAQ =
    selectedCategory === "All"
      ? faq
      : faq.filter((item) => item.category === selectedCategory);

  return (
    <main className={`${styles.boxWidth} ${styles.padding} bg-[#FAFAFA]`}>
      <section className="pt-24 flex flex-col justify-center items-center text-center">
        <h4 className="text-gray text-[13px] leading-[23px] tracking-[4px]">
          FAQ
        </h4>
        <h1 className="sm:text-[60px] sm:leading-[84px] text-4xl text-center font-bold tracking-tight">
          Frequently asked questions
        </h1>
        <p className="text-gray text-lg max-w-[650px] mb-12">
          Here, you'll find answers to the most commonly asked questions about
          our products, services, and policies.
        </p>
        <SearchForm
          styles="w-full max-w-[570px]"
          placeholder="Search your ask"
        />
      </section>
      <FaqFilter
        faqCategories={faqCategories}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="flex flex-col justify-center items-start gap-7 w-full max-w-[800px] mx-auto py-10">
        {filteredFAQ.map(({ question, answer }, index) => {
          const isActive = index === activeIndex ? "active" : "";
          return (
            <div
              key={index}
              className="w-full"
              onClick={() => toggleClick(index)}
            >
              <h2
                className={`flex justify-between items-center gap-2 bg-white rounded-xl shadow-md sm:py-4 sm:px-6 p-4 cursor-pointer text-base sm:text-lg font-semibold ${isActive}`}
              >
                {question}
                <span>{isActive ? <FaArrowDown /> : <FaArrowRight />}</span>
              </h2>
              {isActive && (
                <div className="pt-6 px-4">
                  <p className="text-sm sm:text-base">{answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default FAQ;
