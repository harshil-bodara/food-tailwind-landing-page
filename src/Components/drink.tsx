import Image from "next/image";
import drink from "../asset/Frame 137.png";
import drink1 from "../asset/Frame 138.png";
import drink2 from "../asset/Frame 136.png";

export default function Drink() {
    return (
        <div className="xl:px-20 min-[320px]:pt-8 xl:pt-[60px] sm:px-4 md:px-2 lg:px-10 lg:pt-10">
            <div className="container">
                <div className="lg:text-[32px] sm:text-[24px] font-[600] text-[#000A24] lg:ps-6 font-Roboto min-[320px]:ps-4">DRINK GOOD BEVERAGES</div>
                <div className="flex lg:pt-8 lg-flex-row sm:flex-wrap sm:text-center sm:px-4 lg:px-0 min-[320px]:flex-wrap min-[320px]:pt-4 px-2 md:px-2">
                    <Image src={drink} alt="" className="lg:w-1/5 sm:w-3/5 sm:text-center lg:text-start min-[320px]:w-3/5 md:w-3/5 min-[320px]:pe-[10px] lg:pe-6"></Image>
                    <Image src={drink1} alt="" className="lg:w-1/5 sm:w-2/5  min-[320px]:w-2/5 md:w-2/5 lg:pe-0"></Image>
                    <Image src={drink2} alt="" className="lg:w-3/5 sm:w-full sm:pt-5 lg:pt-0 lg:ps-5 min-[320px]:w-full pt-[10px]"></Image>
                </div>

            </div>
        </div>
    );
}