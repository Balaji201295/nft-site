import React from "react";
import styles from "../style";
import { SearchForm } from "../components";
import { Explore, MobileNFT } from "../containers";

const DiscoverNFT = () => {
  return (
    <>
      <section className={`${styles.boxWidth} pt-24`}>
        <div className={styles.padding}>
          <h1 className="sm:text-[60px] sm:leading-[84px] font-medium tracking-[0.2px] text-4xl text-center">
            Discover Amazing NFT’s
          </h1>
          <SearchForm styles="max-w-[544px] mx-auto my-6" />
        </div>
      </section>
      <Explore />
      <MobileNFT />
    </>
  );
};
export default DiscoverNFT;
