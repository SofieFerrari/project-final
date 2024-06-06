import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import cart from "../assets/cart.svg";
import user from "../assets/human-icon.svg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About", href: "#" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-blue text-white">
      <nav
        className="flex items-center justify-between p-6 font-poppins lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Webify</span>
            <h3 className="font-bold">Webify</h3>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-14">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-row gap-6">
          <img src={user} alt="user account" />
          <div className="relative">
            <img src={cart} alt="shopping cart" />
            <div className="absolute -top-2 left-3 flex h-4 w-4 items-center justify-center rounded-[50%] bg-red">
              <p className="text-[10px]">0</p>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-gray-900 text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* <div className="fixed inset-0 z-50" /> */}
        <DialogPanel className="fixed right-0 top-[80px] z-50 w-full overflow-y-auto bg-light-gray px-6 py-6">
          <div className="flex items-center justify-end">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-button-blue"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 text-lg">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
