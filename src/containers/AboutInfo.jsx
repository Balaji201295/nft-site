import React from "react";
import styles, { layout } from "../style";
import { Image_2 } from "../assets";
const AboutInfo = () => (
  <section
    className={`bg-[#FAFAFA] ${styles.boxWidth} ${layout.section} relative`}
  >
    <div className={`${layout.sectionInfo} flex-1 lg:mt-24`}>
      <h4 className="text-gray text-[13px] leading-[23px] tracking-[4px]">
        NFT MARKETPLACE
      </h4>
      <h1 className="text-[48px] leading-[60px] sm:text-[60px] sm:leading-[84px] tracking-tight pt-3 pb-4">
        About our Company <br className="sm:block hidden" /> NFT Distro
      </h1>
      <p className="text-gray text-lg max-w-[570px] mb-12">
        We are a cutting-edge company focused on the creation, promotion, and
        sale of non-fungible tokens (NFTs). Our marketplace offers a wide range
        of NFTs, from digital art and collectibles to gaming items and virtual
        real estate.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-[.75] lg:mt-24`}>
      <img
        src={Image_2}
        alt="Image"
        className="w-[100%] md:w-[90%] h-[100%] object-contain"
      />
    </div>
  </section>
);
export default AboutInfo;
