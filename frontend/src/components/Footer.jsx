import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Loading } from "./Loading";
import dropdown from "../assets/dropdown.svg";
import { useProductStore } from "../stores/useProductStore";
import Lottie from "lottie-react";
import toTop from "../assets/animation/lottie-to-top.json";

export const Footer = () => {
  const [shopIsOpen, setShopIsOpen] = useState(false);
  const [accountIsOpen, setAccountIsOpen] = useState(false);
  const [customerIsOpen, setCustomerIsOpen] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);

  const categories = useProductStore((state) => state.categories);

  const toggelShop = () => {
    setShopIsOpen(!shopIsOpen);
  };
  const toggelAccount = () => {
    setAccountIsOpen(!accountIsOpen);
  };
  const toggelCustomerService = () => {
    setCustomerIsOpen(!customerIsOpen);
  };
  const toggleAbout = () => {
    setAboutIsOpen(!aboutIsOpen);
  };

  const myAccount = [
    { name: "MY PAGE", to: "/mypage" },
    { name: "LOGIN", to: "/login" },
    { name: "REGISTER", to: "/signup" },
  ];

  return (
    <footer className="relative inset-x-0 bottom-0 flex flex-col items-center bg-blue pb-12 pt-10 font-montserrat leading-9 text-white">
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggelShop}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">SHOP</h4>
          <img src={dropdown} alt="dropdown icon" className="h-2 self-center" />
        </button>
        {shopIsOpen && (
          <ul className="ml-6 space-y-2 py-3 text-sm leading-7 tracking-wide">
            {loadingCategories ? (
              <Loading />
            ) : (
              categories.map((category, index) => (
                <li key={index}>
                  <NavLink
                    to={`/products?category=${category}`}
                    className="cursor-pointer"
                  >
                    {category}
                  </NavLink>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggelAccount}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">
            MY ACCOUNT
          </h4>
          <img src={dropdown} alt="dropdown icon" className="h-2 self-center" />
        </button>
        {accountIsOpen && (
          <ul className="ml-6 space-y-2 py-3 text-sm leading-7 tracking-wide">
            {myAccount.map((account, index) => (
              <li key={index}>
                <NavLink to={account.to}>{account.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggelCustomerService}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">
            CUSTOMER SERVICE
          </h4>
          <img src={dropdown} alt="dropdown icon" className="h-2 self-center" />
        </button>
        {customerIsOpen && (
          <p className="ml-6 w-[280px] py-3 leading-6 tracking-wide">
            This is not a real web shop, but if it was, we&apos;d proably have
            the best customer service in the world!
          </p>
        )}
      </div>
      <div>
        <button
          className="ml-3 flex w-[300px] flex-row justify-between border-b"
          onClick={toggleAbout}
        >
          <h4 className="mb-1 mt-2 text-xl font-bold tracking-wider">
            ABOUT US
          </h4>
          <img src={dropdown} alt="dropdown icon" className="h-2 self-center" />
        </button>
        {aboutIsOpen && (
          <p className="ml-6 w-[280px] py-3 leading-6 tracking-wide">
            This site was designed and developed by Mai, Sofie and Wen for our
            final project of the Web Development Bootcamp at Technigo
            <div className="mt-3 text-center">
              <Button text="Click to read more about us" navTo="/about-us" />
            </div>
          </p>
        )}
      </div>
      <div>
        <h1 className="pt-10 text-center font-poppins text-5xl font-bold tracking-wider">
          Webify
        </h1>
        <p className="py-10 text-center font-lato text-xs">
          Copyright 2024 © Wen Z & Sofie FS & Mai K <br /> Technigo Bootcamp
          Final Project
        </p>
      </div>
      <Lottie
        animationData={toTop}
        loop={true}
        className="absolute bottom-3 right-3 h-16 w-16 cursor-pointer lg:bottom-6 lg:right-6 lg:h-20 lg:w-20"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        title="Back to top"
      />
    </footer>
  );
};
