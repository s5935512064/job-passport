import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const menu = [
  { id: 1, name: "หน้าแรก", href: "/" },
  { id: 2, name: "ค้นหางาน", href: "#" },
  { id: 3, name: "ฝากประวัติ", href: "#" },
  { id: 4, name: "สำหรับบริษัท", href: "#" },
  { id: 5, name: "ข่าว/กิจกรรม", href: "#" },
  { id: 6, name: "ติดต่อเรา", href: "#" },
];

const Navbar: FC<Props> = (): JSX.Element => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="w-full px-5 md:px-10 xl:px-10 py-2 flex justify-center items-center h-24 shadow-md">
        <div className="w-full max-w-7xl h-full flex justify-between items-center">
          <div className="w-32 relative">
            <Image
              src="/assets/logo-jobpassport.gif"
              alt="logo"
              width={100}
              height={20}
            />
          </div>

          <div className="flex-1 gap-4 lg:flex hidden ">
            {menu.map((item, index) => (
              <button
                key={index}
                type="button"
                className={classNames(
                  router.pathname === item.href
                    ? "font-bold text-[#82170F]"
                    : "",
                  "min-w-[100px] text-center hover:scale-110 duration-300"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="inline-flex gap-4">
            <button
              type="button"
              title="login"
              className="px-4 py-2 rounded-md bg-[#82170F] text-white text-center text-sm"
            >
              Log in / Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
