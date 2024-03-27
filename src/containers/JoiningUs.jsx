import React from "react";
import { Button } from "../components";
import styles from "../style";

const JoiningUs = () => (
  <section className={`${styles.boxWidth} ${styles.padding}`}>
    <div className="w-full flex flex-col justify-center items-center text-center bg-[#151515] p-8 sm:p-16 text-white rounded-3xl">
      <h1 className="sm:text-[60px] sm:leading-[84px] text-5xl font-medium tracking-tight mb-4">
        Interested in joining us?
      </h1>
      <p className="w-full max-w-[700px] mb-8">
        We're always looking for passionate individuals to help us achieve our
        goals. Apply today and let's build a better future together.
      </p>
      <Button label="Join us" styles="w-full max-w-[200px]" />
    </div>
  </section>
);
export default JoiningUs;
