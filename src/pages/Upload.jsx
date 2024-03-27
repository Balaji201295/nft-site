import React, { useState } from "react";
import { Button } from "../components";
import { Bid_Dark, Placeholder, Profile_1 } from "../assets";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import styles from "../style";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(Placeholder);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [title, setTitle] = useState("");

  const [selectedOption, setSelectedOption] = useState("option1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileExtension = fileName.split(".").pop().toLowerCase();

      // Check if the file format is allowed
      if (["jpeg", "jpg", "png", "svg"].includes(fileExtension)) {
        setSelectedFileName(fileName);

        // Create a temporary URL for the selected image
        const imageURL = URL.createObjectURL(selectedFile);
        setSelectedImage(imageURL);
      } else {
        alert(
          "File type not supported. Please upload a JPEG, JPG, PNG, or SVG file."
        );
        setSelectedFileName(""); // Clear the selected file name
        setSelectedImage(Placeholder); // Reset to the default image
      }
    }
  };

  return (
    <section className={`${styles.padding} ${styles.boxWidth}`}>
      <div className="py-24">
        <h1 className="sm:text-[60px] sm:leading-[84px] text-4xl text-center font-bold tracking-tight">
          Create new NFT
        </h1>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row justify-start items-start gap-12">
        <form className="w-full flex-1 flex flex-col">
          <h2 className="text-lg text-black font-bold">Upload your NFT</h2>
          <p className="text-sm text-gray font-medium my-4">
            File types supported: JPEG, JPG, PNG, SVG
          </p>
          <label
            htmlFor="fileInput"
            className="bg-[#F3F3F3] rounded-xl flex flex-col items-center cursor-pointer mt-3 mb-6"
          >
            <div className="flex flex-col justify-center items-center h-40">
              <FaCloudUploadAlt color="#B6B6B6" fontSize={36} />
              <span className="text-[#B6B6B6] mt-4">
                {selectedFileName
                  ? `File selected: ${selectedFileName}`
                  : "Upload or drag your file here"}
              </span>
            </div>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <h2 className="text-lg text-black font-bold">Name NFT</h2>
          <label
            htmlFor="title"
            className="bg-[#F3F3F3] rounded-xl flex flex-col items-center cursor-pointer mt-3 mb-6"
          >
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Name NFT"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-xl"
            />
          </label>
          <h2 className="text-lg text-black font-bold">Description</h2>
          <label
            htmlFor="description"
            className="bg-[#F3F3F3] rounded-xl flex flex-col items-center cursor-pointer mt-3 mb-6"
          >
            <textarea
              name="description"
              id="description"
              className="bg-transparent w-full resize-none outline-none p-4"
            ></textarea>
          </label>
          <h2 className="text-lg text-black font-bold">Collections</h2>
          <label
            htmlFor="collections"
            className="bg-[#F3F3F3] rounded-xl flex flex-col items-center cursor-pointer mt-3 mb-6"
          >
            <div className="relative w-full">
              <select
                id="mySelect"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-full appearance-none text-sm font-medium rounded-full py-3 px-4 pr-8 bg-transparent leading-tight focus:outline-none"
              >
                <option value="option1">Recently Added</option>
                <option value="option2">Oldest</option>
                <option value="option3">Popular</option>
              </select>

              {/* Arrow icon for the dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {isDropdownOpen ? (
                  <FaCaretDown className="text-gray-600" />
                ) : (
                  <FaCaretUp className="text-gray-600" />
                )}
              </div>
            </div>
          </label>
          <div className="w-full flex  flex-col sm:flex-row justify-between items-center gap-4">
            <Button label="Create" styles="my-3 w-full" />
            <Button label="Preview" styles="my-3 w-full" />
          </div>
        </form>
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full bg-white shadow-md p-6 rounded-2xl max-w-[400px]">
            <h3 className="text-sm text-center font-bold mb-2">Preview</h3>

            <img
              src={selectedImage}
              alt="Image"
              className="w-[100%] h-[100%] object-contain"
            />

            <div className="flex justify-between items-stretch mt-4 h-20">
              <div className="flex flex-col justify-between items-start">
                <h4 className="text-lg font-bold">
                  {title ? title : "Exboot #1"}
                </h4>
                <div className="flex justify-start items-center gap-2">
                  <img
                    src={Profile_1}
                    alt="Antonson"
                    className="w-[36px] h-[36px] object-contain"
                  />
                  <p>Antonson</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center">
                <p className="text-gray text-sm mt-1">Current Bid</p>
                <div className="flex justify-start items-center gap-2 mb-1">
                  <img src={Bid_Dark} alt="Bid" />
                  <p>3.234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upload;
