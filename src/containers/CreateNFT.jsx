import React from "react";
import { Button } from "../components";
import { Brush } from "../assets";
import styles, { layout } from "../style";
const CreateNFT = () => (
  <section
    className={`${styles.boxWidth} ${layout.section} ${layout.sectionReverse}`}
  >
    <div
      className={`${layout.sectionImg} ${layout.sectionImgReverse}  relative z-[6]`}
    >
      <div className="flex flex-col justify-center items-center p-8 sm:p-16 bg-white rounded-2xl shadow-md">
        <div className="absolute w-[60%] h-[60%] z-[-2] -top-12 right-0 red__gradient"></div>
        <div className="bg-[#FAF6F3] rounded-full p-4">
          <img
            src={Brush}
            alt="Create NFT"
            className="w-[80px] h-[80px] object-contain"
          />
        </div>
        <h3 className="text-2xl font-medium tracking-tight mt-8">
          Create your NFT
        </h3>
      </div>
    </div>
    <div className={`${layout.sectionInfo} m-auto`}>
      <h2 className={styles.heading}>Create your NFT</h2>
      <p className={`text-sm mt-4 mb-6 max-w-[350px]`}>
        Use a program such as Adobe PhotoShop, Illustrator, or Procreate to
        create a digital asset. Make sure the image is in a supported file
        format (e.g. JPEG, PNG, GIF).
      </p>
      <Button
        label="Explore Now"
        styles="blue__gradient py-2 px-4 w-full max-w-[200px]"
      />
    </div>
  </section>
);
export default CreateNFT;
