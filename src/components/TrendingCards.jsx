import React from "react";
import { useNavigate } from "react-router-dom";
import { Bid_Dark } from "../assets";
const TrendingCards = ({
  id,
  imgUrl,
  title,
  profileImg,
  profileName,
  bidValue,
}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/detail-nft/${id}`);
  };

  return (
    <div
      className="flex-1 flex flex-col card p-2 w-full max-w-[300px] cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-[100%] h-[100%] object-contain"
      />
      <h3 className="text-base font-bold py-3">{title}</h3>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-start items-center text-sm font-bold gap-2">
          <img
            src={profileImg}
            alt={profileName}
            className="w-[38px] h-[38px] object-contain"
          />
          <h4>{profileName}</h4>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray">Current Bid</p>
          <div className="flex justify-start items-center gap-1">
            <img src={Bid_Dark} alt="Bid" />
            <p>{bidValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingCards;
