import React from "react";
import { useParams } from "react-router-dom";
import styles from "../style";
import { arts } from "../constants";
import { Button } from "../components";
import { Bid_Dark } from "../assets";
import { FaWallet } from "react-icons/fa";

const DetailNFT = () => {
  const { id } = useParams();
  const art = arts.find((art) => art.id === parseInt(id, 10));

  if (!art) {
    return <div>Art not found</div>;
  }

  const {
    imgUrl,
    title,
    date,
    creatorImg,
    creatorName,
    profileImg,
    profileName,
    description,
    endTime,
    bidValue,
  } = art;

  return (
    <main>
      <section className={`${styles.boxWidth} pt-24`}>
        <div
          className={`${styles.padding} w-full flex flex-col sm:flex-row justify-center items-start gap-12`}
        >
          <div className="flex-1 w-full">
            <img src={imgUrl} alt={title} className="w-[100%] object-contain" />
          </div>
          <div className="flex-1 w-full flex flex-col">
            <h2 className={styles.heading}>{title}</h2>
            <p className="text-[#6b6b6b] text-sm mt-4">Minted On: {date}</p>
            <div className="flex flex-col sm:flex-row justify-start items-start gap-4 md:gap-12 my-8">
              <div>
                <p className="text-[#6b6b6b] text-sm mb-2">Collection</p>
                <div className="flex justify-around items-center gap-4 bg-white shadow-md py-2 px-6 w-full min-w-[180px] rounded">
                  <img
                    src={profileImg}
                    alt={profileName}
                    className="w-[38px] h-[38px] object-contain"
                  />
                  <h5>{profileName}</h5>
                </div>
              </div>
              <div>
                <p className="text-[#6b6b6b] text-sm mb-2">Creator</p>
                <div className="flex justify-around items-center gap-4 bg-white shadow-md py-2 px-6 w-full min-w-[180px] rounded">
                  <img
                    src={creatorImg}
                    alt={creatorName}
                    className="w-[38px] h-[38px] object-contain"
                  />
                  <h5 className="text-base font-bold">{creatorName}</h5>
                </div>
              </div>
            </div>
            <div className="max-w-[500px]">
              <p className="text-[#6b6b6b] text-sm mb-2">Description</p>
              <p className="text-black text-sm">{description}</p>
            </div>
            <div className="flex justify-start items-start gap-6 my-8">
              <div>
                <p className="text-[#6b6b6b] text-sm mb-1">Current Bid</p>
                <div className="flex justify-start items-center gap-2">
                  <img src={Bid_Dark} alt="Image" />
                  <p className="text-lg font-medium">{bidValue}</p>
                </div>
              </div>
              <div>
                <p className="text-[#6b6b6b] text-sm mb-1">Ends in</p>
                <div className="flex justify-start items-center gap-2">
                  <p className="text-lg font-medium">{endTime}</p>
                </div>
              </div>
            </div>

            <Button
              label="Place Bid"
              styles="text-sm w-full max-w-[300px]"
              icon={<FaWallet />}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailNFT;
