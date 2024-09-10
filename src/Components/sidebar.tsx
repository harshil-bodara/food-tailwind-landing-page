"use client";
import Image from "next/image";
import banner from "../asset/Frame 110 (1).png";
import banner1 from "../asset/Frame 110 (2).png";
import banner2 from "../asset/Frame 110 (3).png";
import banner3 from "../asset/Frame 110 (4).png";
import banner4 from "../asset/Frame 110 (5).png";
import banner5 from "../asset/Frame 110 (6).png";
import banner6 from "../asset/Frame 110 (7).png";
import banner7 from "../asset/Frame 110 (8).png";
import banner8 from "../asset/Frame 110 (9).png";
import banner9 from "../asset/Frame 110 (10).png";
import { useState } from "react";

const sidebars = [
    { title: 'FRESH FRUIT & VEGETABLES', img: banner, },
    { title: 'HELTHY SWEETS', img: banner1, },
    { title: 'HELTHY SNACKS', img: banner2, },
    { title: 'TEAS', img: banner3, },
    { title: 'SWEETS', img: banner4, },
    { title: 'BEVERAGES', img: banner5, },
    { title: 'JAMS & PRESERVES', img: banner6, },
    { title: 'CANNED & JARRED FOOD', img: banner7, },
    { title: 'CHEMICALS', img: banner8, },
    { title: 'SALE', img: banner9, },
];
export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="container">
            <button onClick={() => setOpen(!open)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" bg-white inline-flex items-center p-2 min-[320px]:mt-3 sm:mt-5 text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-[#00C462] xl:hidden md:hidden min-[320px]:ps-1 absolute z-50">
                <span className="sr-only">open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" className={`absolute xl:pt-10 lg:pt-0 xl:block -z-40 transition-transform h-full overflow-y-auto dark:bg-gray-800 w-[400px] ${open ? 'flex left-0' : '-left-[400px] lg:left-0'}`}>
                <div className="">
                    <ul className="space-y-2 font-medium bg-white">
                        {sidebars.map((sidebar) =>
                            <li>
                                <a href="#" className="flex items-center lg:pt-[18px] ps-[60px] text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <div className="flex">
                                        <Image src={sidebar.img} alt="" className="w-[46px] h-[46px]"></Image>
                                        <span className="ms-3 mt-2 text-[#022507] text-[16px] font-[600] font-Roboto">{sidebar.title}</span>
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </aside>
        </div>
    );
};