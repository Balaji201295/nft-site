import React from "react";
import {
  Explore,
  FeatureCollections,
  Hero,
  LeaderBoard,
  MobileNFT,
  TrendingArt,
} from "../containers";

const Home = () => (
  <div>
    <div className="BG-[#FAFAFA]">
      <Hero />
      <TrendingArt />
      <FeatureCollections />
      <LeaderBoard />
      <Explore showFilter={false} />
      <MobileNFT />
    </div>
  </div>
);
export default Home;
