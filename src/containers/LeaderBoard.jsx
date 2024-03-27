import React from "react";
import { arts } from "../constants";
import { LeaderBoardDetails } from "../components";
import styles from "../style";
const LeaderBoard = () => (
  <section
    className={`${styles.boxWidth} sm:px-16 px-6 sm:py-28 py-8 bg-[#191919] flex flex-col items-center justify-center`}
  >
    <h1 className={`text-4xl text-white font-semibold mb-16`}>
      LeaderBoard of the Week
    </h1>
    <div className="flex flex-wrap w-full gap-6 sm:gap-12">
      {arts.slice(0, 5).map((art) => (
        <LeaderBoardDetails key={art.id} {...art} />
      ))}
    </div>
  </section>
);
export default LeaderBoard;
