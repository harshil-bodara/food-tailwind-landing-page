import Image from "next/image";
import header from "../asset/Frame.png";
import header1 from "../asset/Group (1).png";
import header2 from "../asset/noun-cart-4883860 1.png";
import header3 from "../asset/Group (2).png";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-[#00C462] nav w-full sticky top-0 sm:flex-row lg:h-[100px] lg:w-full min-[320px]:w-full min-[320px]:h-[68px] z-10 lg:pt-[29px] lg:pb-7 sm:w-full sm:h-[70px] md:w-full md:h-[80px] md:pt-[22px] md:pb-[18px]">
      <div className="flex flex-wrap items-center justify-between xl:ps-[60px] lg:ps-4 lg:h-full">
        <a href="#" className="flex items-center sm:block xs:block ps-2  min-[320px]:ps-4 sm:ps-4 min-[320px]:pt-[22px] min-[320px]:pb-[18px] lg:pt-0 lg:pb-0 sm:pt-[22px] sm:pb-[18px] md:pt-0 md:pb-0">
          <Image src={header} className="lg:h-[42.71px] lg:w-[255.16px] sm:h-[28px] sm:w-[167px] min-[320px]:w-[167px] min-[320px]:h-[28px] md:w-[200px] md:h-[32px]" alt="" />
        </a>
        <li className="lg:h-[44px] lg:w-[112px] sm:h-[36px] sm:w-[48px] flex-col lg:hidden sm:block flex justify-end md:hidden min-[320px]:block min-[320px]:pe-[10px] me-5 lg:me-0">
          <a href="#" className="block lg:h-[44px] lg:w-[112px] sm:h-[36px] sm:w-[48px] min-[320px]:w-[48px] h-[36px] rounded-lg bg-white border-2 border-[#00C462] sm:block" aria-current="page">
            <div className="flex">
              <Image src={header3} alt="" className="w-[19  .5px] h-[19 .5px] ms-3 mt-1"></Image><span className="text-secondary min-[320px]:hidden text-[16px] font-[400] pt-2.5 ps-3 lg:block sm:hidden">Log in</span>
            </div>
          </a>
        </li>
        <div className="w-full md:w-auto sm:flex-row lg:mt-0 sm:mt-0 md:flex-row lg:border-hidden min-[320px]:pt-4 min-[320px]:pb-4 sm:pt-[17px] sm:pb-[17px] md:pt-0 md:pb-0 border-t border-[#00C462] xl:pt-0 xl:pb-0 min-[320px]:bg-white sm:bg-white xl:border-hidden md:border-hidden" id="navbar-default">
          <ul className="flex lg:pt-0 lg:mt-0 md:p-0 md:flex-row min-[320px]:bg-white sm:bg-white">
            <li className="sm:flex-row lg:ps-0 lg:pe-8 min-[320px]:pe-[55px] min-[320px]:ps-10  sm:pe-56 lg:pt-0 lg:pb-0  sm:mt-2 md:mt-0 lg:mt-0 sm:ps-16 md:flex-row md:pt-0 md:pb-0 md:pe-2">
              <a href="#" className="flex lg:h-[44px] lg:w-[286px] sm:h-[36px] sm:w-[287px] min-[320px]:w-[166px] h-[36px] rounded-lg bg-[#F1F0ED]" aria-current="page">
                <div className="flex">
                  <Image src={header1} alt="" className="w-[24px] h-[24px] pt-1 mt-1.5 ms-3 text-[#4A4A4A]"></Image><span className="text-[#818181] text-[16px] font-[400] pt-2 ps-3">Search</span>
                </div>
              </a>
            </li>
            <li className="sm:flex flex-col flex justify-end lg:pe-8 min-[320px]:pe-[10px] md:mt-0 lg:pt-0 lg:pb-0 sm:pe-[15px] md:pt-0 md:pb-0 md:pe-4 md:ps-4">
              <a href="#" className="block lg:h-[44px] lg:w-[132px] sm:h-[38px] sm:w-[48px] min-[320px]:w-[48px] h-[38px] rounded-lg bg-[#F1F0ED]" aria-current="page">
                <div className="flex  ">
                  <Image src={header2} alt="" className="w-[19 .5px] h-[19 .5px] pt-2  ms-3 sm:block text-[#000000]"></Image><span className="text-[#818181] min-[320px]:hidden text-[16px] font-[400] pt-2.5 ps-3 lg:block sm:hidden">Cart</span>
                </div>
              </a>
            </li>
            <li className="lg:block flex justify-end sm:hidden md:block min-[320px]:hidden min-[320px]:flex-row md:flex-row md:pe-3 md:pt-0 md:pb-0 lg:pe-10">
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
