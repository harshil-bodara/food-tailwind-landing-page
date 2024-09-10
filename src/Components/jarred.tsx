import Image from "next/image";
import jar from "../asset/Frame 147.png";

export default function Jarred() {
    return (
        <div className="xl:px-20 min-[320px]:px-2 min-[320px]:pt-8 xl:pt-[60px] lg:px-10 lg:pt-10">
            <div className="container">
                <div className="flex justify-start">
                    <h1 className="lg:text-[32px] sm:text-[24px] text-[#000A24] font-[600] sm:px-4 lg:px-0 min-[320px]:pt-3 lg:pt-0 font-Roboto min-[320px]:px-2">CANNED & JARED FOOD</h1>
                </div>
                <div className="flex lg:pt-8 min-[320px]:pt-4">
                    <Image src={jar} alt="" className="sm:w-full lg:w-full sm:px-4 lg:px-0 min-[320px]:w-full min-[320px]:px-2 md:px-2"></Image>
                </div>
            </div>
        </div>
    );
}