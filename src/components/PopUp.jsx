import React from "react";
import styles from "../style";
import { Button } from "../components";
import { FaTimes } from "react-icons/fa";

const PopUp = ({ onClose }) => {
  return (
    <section
      className={`fixed inset-0 flex justify-center items-center z-30 backdrop-blur-md ${styles.padding}`}
    >
      <div className="relative w-full max-w-[400px] bg-white text-black p-8 sm:p-12 text-center rounded-xl shadow-md">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          <FaTimes fontSize={16} />
        </button>
        <h2 className="text-2xl font-bold">Sign with your wallet!</h2>
        <p className="text-sm mt-4 mb-8">
          Sign Wallet NFT, the secure digital storage for unique assets, take a
          step towards the future
        </p>
        <div className="flex flex-col gap-4">
          <Button label="Connect Wallet A" styles="w-full" />
          <Button label="Connect Wallet B" styles="blue__gradient w-full" />
          <Button label="Connect Wallet C" styles="green__gradient w-full" />
        </div>
      </div>
    </section>
  );
};

export default PopUp;
