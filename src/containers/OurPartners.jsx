import React from "react";
import { partners } from "../constants";
import styles from "../style";
const OurPartners = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <h1 className="sm:text-[60px] sm:leading-[84px] text-4xl font-bold text-center w-full">
      Our Partners
    </h1>
    <div className="grid grid-cols-1 ss:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-12 my-12">
      {partners.map(({ imgUrl }, index) => (
        <div key={index} className="flex justify-center items-center min-w-44">
          <img
            src={imgUrl}
            alt="Image"
            className="w-[170px] h-[50px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
export default OurPartners;
