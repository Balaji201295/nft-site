import React, { useState, useEffect } from "react";
import { Button, PopUp } from "../components";
import { FaWallet } from "react-icons/fa";
import styles, { layout } from "../style";
import { Ball, HeroImg } from "../assets";

const Hero = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isPopupVisible);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isPopupVisible]);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <header
      className={`bg-[#FAFAFA] ${styles.boxWidth} ${layout.section} relative`}
    >
      <div className={`${layout.sectionInfo} pt-24`}>
        <h4 className="text-gray text-[13px] leading-[23px] tracking-[4px]">
          WEB 3 NON-FUNGIBLE TOKENS
        </h4>
        <h1 className="text-[48px] leading-[60px] sm:text-[68px] sm:leading-[84px] tracking-tight pt-3 pb-4">
          Unlock Unique <br className="sm:block hidden" /> Digital Ownership
          with NFTs
        </h1>
        <p className="text-gray text-lg max-w-[475px] mb-12">
          Experience the Revolutionary World of Non-Fungible Tokens on Our
          Exclusive NFT Marketplace
        </p>
        <Button
          label="Connect Wallet"
          icon={<FaWallet />}
          onClick={togglePopup}
        />
      </div>
      <div className={`${layout.sectionImg} pt-24 relative z-[5]`}>
        <img
          src={HeroImg}
          alt="Image"
          className="w-[100%] md:w-[90%] h-[100%] object-contain"
        />
        <div className="absolute hidden sm:block top-16 -right-4 z-[1]">
          <img src={Ball} alt="Ball" className="w-[83px] h-[87px]" />
        </div>
        <div className="absolute bottom-6 hidden sm:block md:-left-[2rem] -left-[6rem] z-[2]">
          <img src={Ball} alt="Ball" className="w-[149px] h-[156px]" />
        </div>
      </div>
      {isPopupVisible && <PopUp onClose={togglePopup} />}
    </header>
  );
};

export default Hero;
