import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", current: false, path: "/" },
  { name: "Property", current: false, path: "/property" },
  { name: "Search", current: false, path: "/search" },
  { name: "News", current: false, path: "/news" },
  { name: "About us", current: false, path: "/aboutus" },
  { name: "Contact us", current: false, path: "/contactus" },
  { name: "Admin", current: true, path: "/admin" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="shadow-lg z-20"
      style={{ background: "var(--white)", position: "sticky", top: 0 }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8 ml-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 "
                      aria-hidden="true"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                      style={{ color: "black" }}
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">
                <div className="flex lg:min-w-min lg:flex-1">
                  <Link to="/">
                    <img
                      className="h-auto max-h-12 w-auto max-w-full"
                      src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/Brickland-Consulting-Logo.png?alt=media&token=f56d0e29-d696-4727-8ef9-abe9a657fb92"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Typography
                        component={Link}
                        key={item.name}
                        to={item.path}
                        className={classNames(
                          item.current
                            ? "bg-yellow-400 text-black hover:bg-green-400 hover:text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Typography>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
