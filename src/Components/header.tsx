import Image from "next/image";
import header from "../asset/Frame.png";
import header1 from "../asset/Group (1).png";
import header2 from "../asset/noun-cart-4883860 1.png";
import header3 from "../asset/Group (2).png";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-[#00C462] nav w-full sticky top-0 sm:flex-row sm:w-full lg:h-full lg:w-full md:w-full min-[320px]:w-full h-16 z-10 lg:pt-[29px] lg:pb-7">
      <div className="flex flex-wrap items-center justify-between lg:ps-[60px] text-center">
        <a href="#" className="flex items-center space-x-3 sm:block xs:block ps-2 sm:pt-3 lg:pt-0">
          <Image src={header} className="lg:h-[42.71px] lg:w-[255.16px] sm:h-[28px] sm:w-[167px] md:w-5/5 min-[320px]:w-32 h-10 md:ps-3 sm:ps-3 min:[320px]:pb-[10px] min-[320px]:pt-[5px]" alt="" />
        </a>
        <li className="sm:pe-3 lg:h-[44px] lg:w-[112px] sm:h-[36px] sm:w-[48px] flex-col lg:hidden sm:block flex justify-end md:hidden min-[320px]:block min-[320px]:pe-[15px] pb-[10px] pt-[10px]">
          <a href="#" className="block lg:h-[44px] lg:w-[112px] sm:h-[36px] sm:w-[48px] min-[320px]:w-[48px] h-[36px] rounded-lg bg-white border-2 border-[#00C462] sm:block" aria-current="page">
            <div className="flex">
              <Image src={header3} alt="" className="w-[19  .5px] h-[19 .5px] pt-1 ms-3"></Image><span className="text-secondary min-[320px]:hidden text-[16px] font-[400] pt-2.5 ps-3 lg:block sm:hidden">Log in</span>
            </div>
          </a>
        </li>
        <div className="w-full md:block md:w-auto sm:flex flex-row min-[320px]:mt-6 lg:mt-0 sm:mt-0" id="navbar-default">
          <ul className="flex sm:pt-6 lg:pt-0 lg:mt-0 md:p-0">
            <div className="flex lg:hidden sm:flex-row flex-wrap md:hidden min-[320px]:flex-col pe-1.5 ps-0 sm:pt-[22px] sm:ps-4 sm:pb-4 sm:pe-4 lg:pt-0 lg:pb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-[#00C462]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
            </div>
            <li className="sm:flex-row lg:ps-0 lg:pe-8 min-[320px]:pe-[60px] sm:pt-[17px] sm:pb-[17px] sm:pe-[69px] md:pe-[69px]">
              <a href="#" className="flex lg:h-[44px] lg:w-[286px] sm:h-[36px] sm:w-[187px] min-[320px]:w-[160px] h-[36px] rounded-lg bg-[#F1F0ED]" aria-current="page">
                <div className="flex">
                  <Image src={header1} alt="" className="w-[24px] h-[24px] pt-1 mt-1.5 ms-3 text-[#4A4A4A]"></Image><span className="text-[#818181] text-[16px] font-[400] pt-2 ps-3">Search</span>
                </div>
              </a>
            </li>
            <li className="sm:flex flex-col flex justify-end lg:pe-8 min-[320px]:pe-0 min-[320px]:pt-4 -mt-4 sm:pt-4 sm:pb-4 sm:pe-[15px] md:pe-8">
              <a href="#" className="block lg:h-[44px] lg:w-[132px] sm:h-[38px] sm:w-[48px] min-[320px]:w-[48px] h-[38px] rounded-lg bg-[#F1F0ED]" aria-current="page">
                <div className="flex  ">
                  <Image src={header2} alt="" className="w-[19 .5px] h-[19 .5px] pt-2  ms-3 sm:block text-[#000000]"></Image><span className="text-[#818181] min-[320px]:hidden text-[16px] font-[400] pt-2.5 ps-3 lg:block sm:hidden">Cart</span>
                </div>
              </a>
            </li>
            <li className="lg:block flex-col sm:hidden md:block min-[320px]:hidden min-[320px]:flex-row pe-10 md:pt-3.5 md:pb-3.5 md:pe-10">
              <a href="#" className="hover:bg-[#00C462] block lg:h-[44px] lg:w-[112px] md:w-[100px] md:h-[40px] sm:h-[38px] sm:w-[48px] rounded-xl min-[320px]:w-[48px] h-[38px] bg-white border-2 border-[#00C462] sm:block" aria-current="page">
                <div className="flex">
                  <Image src={header3} alt="" className="w-[19  .5px] h-[19 .5px] pt-1 ms-3 hover:text-[#ffffff]"></Image><span className="hover:text-white md:block text-[#555555] min-[320px]:hidden text-[16px] font-[400] pt-2 ps-3 lg:block sm:hidden">Log in</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
