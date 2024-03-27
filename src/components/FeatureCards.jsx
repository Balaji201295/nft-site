import React from "react";
import { Button } from "../components";
import { Bid_Dark } from "../assets";
import { FaWallet } from "react-icons/fa";
const FeatureCards = ({
  imgUrl,
  title,
  profileImg,
  profileName,
  bidValue,
  description,
  endTime,
}) => (
  <div className="flex-1 flex flex-col ss:flex-row gap-6 justify-start items-start card p-5 w-full">
    <div className="flex-1 w-full h-full">
      <img
        src={imgUrl}
        alt={title}
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
    <div className="flex-1 w-full h-full flex flex-col">
      <div className="flex justify-start items-center text-sm font-bold gap-2">
        <img
          src={profileImg}
          alt={profileName}
          className="w-[38px] h-[38px] object-contain"
        />
        <h4>{profileName}</h4>
      </div>
      <h3 className="text-2xl font-bold py-2">{title}</h3>
      <p className="text-gray text-xs font-medium">Description</p>
      <p className="text-black/80 font-medium text-sm my-2">
        {description.length <= 50 ? (
          description
        ) : (
          <>{description.slice(0, 50)}...</>
        )}
      </p>
      <div className="flex justify-between items-center my-4">
        <div className="flex justify-start items-start gap-12">
          <div>
            <p className="text-xs text-gray">Current Bid</p>
            <div className="flex justify-start items-center gap-1">
              <img src={Bid_Dark} alt="Bid" />
              <p>{bidValue}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray">Ends In</p>
            <p>{endTime}</p>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Button label="Place Bid" styles="text-sm w-full" icon={<FaWallet />} />
      </div>
    </div>
  </div>
);
export default FeatureCards;
