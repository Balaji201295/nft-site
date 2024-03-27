import React from "react";
import styles from "../style";
import { statistics } from "../constants";
const Statistics = () => (
  <section
    className={`${styles.boxWidth} ${styles.padding} flex flex-wrap justify-center items-center gap-10 md:gap-0`}
  >
    {statistics.map(({ icon, value, title }) => (
      <div
        key={icon}
        className="flex-1 flex flex-col justify-center items-center min-w-28 gap-2"
      >
        <img
          src={icon}
          alt={title}
          className="w-[74px] h-[82px] object-contain"
        />
        <h3 className="text-xl font-bold">{value}</h3>
        <p className="text-lg">{title}</p>
      </div>
    ))}
  </section>
);
export default Statistics;
