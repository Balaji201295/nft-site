import React from "react";
import { Button } from "../components";
import { CreateNFT, ShareNFT, UploadNFT } from "../containers";
import styles from "../style";
import { Link } from "react-router-dom";
const BecomeArtist = () => (
  <>
    <section
      className={`w-full flex flex-col md:flex-row bg-[#FAFAFA] ${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} py-28 relative`}
    >
      <div className="flex flex-col justify-center items-center text-black w-full max-w-[650px] text-center">
        <h1 className="sm:text-[60px] sm:leading-[84px] text-4xl">
          Become Artist
        </h1>
        <p className={`${styles.paragraph} mt-6 mb-10`}>
          Welcome to the world of NFTs, Creator! We're excited to see your
          unique digital assets come to life. Create, share, and let your
          imagination run wild.
        </p>
        <Link to="/upload" className="w-full max-w-[240px] mx-auto">
          <Button label="Upload" styles="w-full" />
        </Link>
      </div>
    </section>
    <CreateNFT />
    <UploadNFT />
    <ShareNFT />
  </>
);
export default BecomeArtist;
