import React from "react";
import styles from "../style";
import { Phone } from "../assets";
import { IoMdDownload } from "react-icons/io";
const MobileNFT = () => (
  <section className={`${styles.boxWidth} ${styles.padding} md:mt-36`}>
    <div
      className="w-full flex flex-col md:flex-row gap-12 md:gap-0 bg-[#151515] rounded-[30px]
    sm:py-16 py-12 sm:px-16 px-8 relative overflow-hidden md:overflow-visible"
    >
      <div className="flex-1 flex-col">
        <h2 className="sm:text-[60px] sm:leading-[84px] text-4xl text-white font-medium tracking-[0.2px] mb-8">
          Try our App <br className="sm:block hidden" /> Mobile NFT
        </h2>
        <button
          type="button"
          className="flex items-center gap-2 text-white border border-solid rounded-xl py-2 px-4 border-white"
        >
          <IoMdDownload />
          <span>Download Now</span>
        </button>
      </div>
      <div className="flex-1 flex sm:justify-center items-center md:absolute right-20 -top-[132px] -mb-16 md:mb-0">
        <img
          src={Phone}
          alt="Phone"
          className="md:w-[100%] w-[80%] h-[100%] object-contain"
        />
      </div>
    </div>
  </section>
);
export default MobileNFT;
