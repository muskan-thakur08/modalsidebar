import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import "./Container.css";
import { useState } from "react";

export default function Container() {
  let [navIsVisible, setNavIsVisible] = useState(false);
  let [cross, setCross] = useState(false);
  let pages = [
    {
      icon: FaHome,
      name: "Home",
    },
    {
      icon: FaUserGroup,
      name: "Team",
    },
    {
      icon: FaFolderOpen,
      name: "Projects",
    },
    {
      icon: FaCalendarAlt,
      name: "Calendar",
    },
    {
      icon: CgFileDocument,
      name: "Documents",
    },
  ];
  let social = [
    { icon: FaFacebook },
    { icon: FaTwitter },
    { icon: FaLinkedin },
    { icon: FaBehance },
    { icon: IoDiamond },
  ];
  function handleNavbar() {
    setNavIsVisible(!navIsVisible);
  }
  function handleCross() {
    setCross(!cross);
  }
  return (
    <div
      className={`w-full min-h-screen bg-[#f1f5f8] relative ${
        cross ? "bg-[rgba(0,0,0,.2)]" : "bg-[#f1f5f8]"
      }`}
    >
      <div className="pt-8 pl-9">
        <button onClick={handleNavbar}>
          <AiOutlineMenu className="bounce w-10 h-10 text-[#49a6e9]" />
        </button>
      </div>
      <div>
        <div
          className={`w-96 h-full bg-white absolute top-0 ${
            navIsVisible ? "left-0" : "-left-[100%]"
          }`}
        >
          <div className="flex justify-between items-center p-5">
            <img
              src="	https://react-project-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg"
              className="w-48"
            />
            <button onClick={handleNavbar} className="text-red-700 text-xl">
              <ImCross />
            </button>
          </div>
          <div className="mt-2 h-96">
            <ul className="cursor-pointer text-[#617D98]  flex flex-col">
              {pages.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="hover:bg-[#f1f5f8] h-16 pl-5 flex items-center gap-4 text-[20px]"
                  >
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="social flex items-center justify-center gap-4 h-32 mt-5">
            {social.map((item, idx) => {
              return (
                <item.icon
                  key={idx}
                  className="text-[#49a6e9] w-6 h-6 hover:text-[#063251] cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center mt-56 ${cross?"hidden":"block"}`}>
        <button
          onClick={handleCross}
          className="px-4 py-1 tracking-widest uppercase bg-zinc-800 rounded border-2 text-white border-black transition ease-linear delay-100 hover:bg-white hover:text-black duration-200 shadow-lg text-[14px]"
        >
          Show Modal
        </button>
      </div>
      <div className="flex items-center justify-center mt-32">
        <div
          className={`box bg-white p-4 rounded-md px-10 h-40 w-[45%] ${
            cross ? "block" : "hidden"
          }`} >
          <div className="flex items-center justify-end mb-5">
            <button onClick={handleCross} className="text-red-700 text-xl">
              <ImCross />
            </button>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#102A42]">Modal Content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
