import React from "react";
import { Bid_Light } from "../assets";
const LeaderBoardDetails = ({ profileImg, profileName, bidValue }) => (
  <div className="flex-1 flex flex-col w-full min-w-40 justify-center items-center">
    <div className="mb-4 flex justify-center items-center">
      <img
        src={profileImg}
        alt={profileName}
        className="md:w-[157px] w-[70%] object-contain"
      />
    </div>
    <h3 className="text-white font-bold text-base mb-2">{profileName}</h3>
    <div className="flex justify-start items-center gap-1">
      <img src={Bid_Light} alt="Bid" />
      <p className="text-white">{bidValue}</p>
    </div>
  </div>
);
export default LeaderBoardDetails;
