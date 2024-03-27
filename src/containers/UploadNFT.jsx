import React from "react";
import { Button } from "../components";
import { Brush, UploadImg } from "../assets";
import styles, { layout } from "../style";
const UploadNFT = () => (
  <section className={`${styles.boxWidth} ${layout.section}`}>
    <div className={`${layout.sectionInfo} m-auto md:items-end`}>
      <h2 className={styles.heading}>Upload your NFT</h2>
      <p className={`text-sm mt-4 mb-6 max-w-[350px]`}>
        Once you've chosen a marketplace, sign up for an account and upload your
        NFT. You will likely need to provide a title, description, and tags for
        your asset, as well as set a price.
      </p>
      <Button
        label="Explore Now"
        styles="blue__gradient py-2 px-4 w-full max-w-[200px]"
      />
    </div>
    <div className={`${layout.sectionImg}  relative z-[6]`}>
      <div className="flex flex-col justify-center items-center p-8 sm:p-16 bg-white rounded-2xl shadow-md">
        <div className="absolute w-[60%] h-[60%] z-[-2] -top-12 right-0 red__gradient"></div>
        <div className="bg-[#FAF6F3] rounded-full p-4">
          <img
            src={UploadImg}
            alt="Create NFT"
            className="w-[80px] h-[80px] object-contain"
          />
        </div>
        <h3 className="text-2xl font-medium tracking-tight mt-8">
          Upload your NFT
        </h3>
      </div>
    </div>
  </section>
);
export default UploadNFT;
