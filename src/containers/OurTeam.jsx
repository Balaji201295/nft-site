import React from "react";
import { teams } from "../constants";
import styles from "../style";
const OurTeam = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <h1 className="sm:text-[60px] sm:leading-[84px] text-4xl font-bold text-center w-full">
      Our Team
    </h1>
    <div className="grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-12 my-12">
      {teams.map(({ profileImg, profileName, position }, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center min-w-40 gap-2"
        >
          <img
            src={profileImg}
            alt={profileName}
            className="w-[150px] h-[150px] object-contain"
          />
          <h3 className="text-xl font-bold">{profileName}</h3>
          <p className="text-gray text-base">{position}</p>
        </div>
      ))}
    </div>
  </section>
);
export default OurTeam;
