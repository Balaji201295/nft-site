import React from "react";
import { Link } from "react-router-dom";
import { Fire } from "../assets";
import { TrendingCards } from "../components";
import { arts } from "../constants";
import styles from "../style";
const TrendingArt = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <div className="flex flex-col ss:flex-row gap-12 ss:gap-0 justify-between items-center mb-12">
      <h2 className={`${styles.heading} flex justify-start gap-2`}>
        <span>Trending Art</span>
        <img src={Fire} alt="Fire" className="w-[36px] h-[36px]" />
      </h2>
      <div className="ss:block hidden">
        <Link
          to="/discover-nft"
          className="text-[16px] leading-[24px] font-bold"
        >
          Discover More
        </Link>
      </div>
    </div>
    <div className="w-full grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-6">
      {arts.slice(0, 4).map((art) => (
        <TrendingCards key={art.id} {...art} />
      ))}
    </div>
    <div className="ss:hidden block w-full py-8 text-center">
      <Link to="/discover-nft" className="text-[16px] leading-[24px] font-bold">
        Discover More
      </Link>
    </div>
  </section>
);
export default TrendingArt;
