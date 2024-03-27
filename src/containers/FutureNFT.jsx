import React from "react";
import { Astronaut } from "../assets";
import styles, { layout } from "../style";
const FutureNFT = () => (
  <section
    className={`${styles.boxWidth} ${layout.section} ${layout.sectionReverse}`}
  >
    <div className={`${layout.sectionImg} ${layout.sectionImgReverse}`}>
      <img
        src={Astronaut}
        alt="Astronaut"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
    <div className={`${layout.sectionInfo}`}>
      <h2
        className={`sm:text-[58px] sm:leading-[72px] text-4xl font-medium tracking-tight`}
      >
        NFT Represent <br className="sm:block hidden" /> the future
      </h2>
      <p className={`text-sm mt-8 max-w-[425px]`}>
        We believe that NFTs represent the future of digital ownership and are
        excited to provide our customers with access to this revolutionary new
        market. Our platform is user-friendly and easy to navigate, making it
        simple for creators to upload and sell their NFTs and for buyers to
        discover and purchase unique digital assets.
      </p>
    </div>
  </section>
);
export default FutureNFT;
