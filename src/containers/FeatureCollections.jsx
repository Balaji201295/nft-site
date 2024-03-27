import React from "react";
import { arts } from "../constants";
import { FeatureCards } from "../components";
import styles from "../style";
const FeatureCollections = () => (
  <section className={`${styles.boxWidth} ${styles.padding} overflow-hidden`}>
    <h2 className={`"w-full text-center mb-12 ${styles.heading}`}>
      Featured Collections
    </h2>

    <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 relative z-[5]">
      <div className="lg:block hidden red__gradient w-[50%] h-[80%] rounded-full absolute -left-44 top-12 -z-[2]"></div>
      <div className="lg:block hidden red__gradient w-[50%] h-[80%] rounded-full absolute -right-44 top-12 -z-[1]"></div>
      {arts.slice(0, 2).map((art) => (
        <FeatureCards key={art.id} {...art} />
      ))}
    </div>
  </section>
);
export default FeatureCollections;
