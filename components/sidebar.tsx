"use client";

import { useState } from "react";
import { FaBullseye, FaChartBar, FaComments, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsBook } from "react-icons/bs"; 
import Link from "next/link";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-purple-700 text-white p-3 flex flex-col justify-between transition-all duration-300 ${
        isExpanded ? "w-56" : "w-16"
      }`}
    >
      
      
      {/* Menu Items */}
      <nav className="flex flex-col space-y-4 mt-10">
      <div className="w-full flex justify-center items-center py-4  ">
        <img src="/logo.png" alt="Logo" className={`transition-all duration-300 ${isExpanded ? "w-20" : "w-10"}`} />
      </div>
        <Link href="/result" className="flex items-center space-x-2 text-lg hover:text-orange-300">
          <FaChartBar /> {isExpanded && <span>Result</span>}
        </Link>

        <Link href="/blog" className="flex items-center space-x-2 text-lg hover:text-orange-300">
          <FaBullseye /> {isExpanded && <span>Strategies</span>}
        </Link>

        <Link href="#/howitworks" className="flex items-center space-x-2 text-lg hover:text-orange-300">
          <BsBook /> {isExpanded && <span>How it works</span>}
        </Link>

        <Link href="#" className="flex items-center space-x-2 text-lg hover:text-orange-300">
          <FaComments /> {isExpanded && <span>Join for updates</span>}
        </Link>
      </nav>
      {/* Toggle Button */}
      <button
        className="mt-4 bg-white text-purple-700 rounded-full p-1 shadow-md self-end"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
      </button>

      {/* Logo Container */}
      {/* <div className="w-full flex justify-center items-center py-4 border-t border-white/30">
        <img src="/logo.png" alt="Logo" className={`transition-all duration-300 ${isExpanded ? "w-20" : "w-10"}`} />
      </div> */}
    </aside>
  );
};

export default Sidebar;
