import Image from "next/image";
import most from "../asset/Frame 135.png";

export default function Most() {
    return (
        <div className="lg:px-20 min-[320px]:px-2 lg:pt-[60px] sm:px-4 md:px-2">
            <div className="container">
                <div className="flex justify-start lg:px-0 min-[320px]:pt-8 lg:pt-0">
                    <h1 className="font-[600] lg:text-[32px] sm:text-[24px] text-[#000A24] font-Roboto min-[320px]:ps-4">THE MOST HEALTHY TEA</h1>
                </div>
                <div className="flex lg:pt-8 sm:px-4 lg:px-0 min-[320px]:pt-4 px-4 md:px-2">
                    <Image src={most} alt="" className="lg:w-full sm:w-full min-[320px]:w-full"></Image>
                </div>
            </div>
        </div>
    );
}