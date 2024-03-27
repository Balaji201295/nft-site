import React from "react";
import { Link } from "react-router-dom";
import { Logo_1, Logo_2, Logo_3 } from "../assets";
import { FaRegCopyright } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { footerLinks, socialLinks } from "../constants";
import styles from "../style";

const Footer = () => {
  return (
    <footer className={`${styles.padding} mt-16 lg:mt-0 ${styles.boxWidth}`}>
      <div className="flex flex-col">
        <div className="flex flex-wrap flex-col gap-8 lg:gap-0 md:flex-row justify-between items-start mb-12">
          <div className="flex-1 flex flex-col justify-start items-start">
            <div className="flex justify-start items-center gap-1 mb-8">
              {[Logo_1, Logo_2, Logo_3].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-8 md:w-10 h-8 lg:h-10"
                />
              ))}
            </div>
            <h2 className="text-[42px] leading-tight font-medium tracking-tight">
              NFT Distro
            </h2>
            <p className="text-[14px] leading-6 text-gray max-w-[350px] mt-2">
              Experience the Revolutionary World of Non-Fungible Tokens on Our
              Exclusive NFT Marketplace
            </p>
          </div>
          <div className="w-full flex-[1.25] flex-col gap-8 ss:flex-row flex justify-start sm:justify-between items-start sm:items-center">
            <div className="w-full flex items-start justify-between">
              {footerLinks.map((footerLink, index) => (
                <div key={index} className="flex flex-col ss:min-w-40">
                  <h2 className="text-[18px] leading-7 font-bold">
                    {footerLink.title}
                  </h2>
                  <ul>
                    {footerLink.links.map((item, index) => (
                      <li
                        key={index}
                        className={`text-gray text-[14px] leading-6 capitalize ${
                          index !== footerLink.links.length ? "mt-4" : ""
                        }`}
                      >
                        <Link
                          to={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = item.path;
                          }}
                        >
                          {item.link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <form className="w-full flex flex-col items-start">
              <h2 className="text-[18px] leading-7 font-bold mb-4">
                Join our community
              </h2>
              <div className="w-full flex justify-between items-center border border-black rounded-[35px] p-1 max-w-[300px] ss:max-w-96">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full pl-4"
                />
                <button
                  type="submit"
                  className="bg-black p-2 sm:p-4 rounded-full"
                >
                  <BsArrowRightShort color="#fff" fontSize={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 ss:gap-0 ss:flex-row justify-between items-center">
          <p className="text-[12px] leading-5 text-gray flex justify-start gap-1 items-center">
            <FaRegCopyright color="#000" />
            <span>Copyright NFT Distro 2024</span>
          </p>
          <div className="flex item-center justify-end gap-5">
            {socialLinks.map(({ icon, link }, index) => {
              const IconImg = icon;
              return (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  className="w-[2.25rem] h-[2.25rem] flex justify-center items-center text-[#838383] bg-[#F4F4F4] rounded-3xl hover:bg-black transition-all duration-500"
                >
                  <IconImg fontSize={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
