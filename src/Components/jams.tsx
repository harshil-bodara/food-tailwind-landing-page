import Image from "next/image";
import jams from "../asset/Frame 143.png";
import jams1 from "../asset/Frame 144.png";
import jams2 from "../asset/Frame 145.png";

export default function Jams() {
    return (
        <div className="lg:px-20 min-[320px]:px-2 min-[320px]:pt-8 lg:pt-[60px] sm:px-4 md:px-2">
            <div className="flex justify-start sm:px-2 lg:px-0 ">
                <h1 className="font-[600] lg:text-[32px] sm:text-[24px] text-[#000A24] font-Roboto min-[320px]:px-4">FANTASTIC JAMS & PRESERVES</h1>
            </div>
            <div className="flex lg:pt-8 lg:flex-row sm:flex flex-wrap lg:text-start lg:px-0 min-[320px]:flex-wrap min-[320px]:pt-4 min-[320px]:px-2">
                <Image src={jams} alt="" className="lg:w-2/5 sm:w-full min-[320px]:w-full md:w-full lg:pe-6"></Image>
                <Image src={jams1} alt="" className="lg:w-2/5 sm:w-3/5 sm:pt-2 lg:pt-0 min-[320px]:w-3/5 md:w-3/5 min-[320px]:pt-2.5 min-[320px]:pe-2.5 lg:pe-6"></Image>
                <Image src={jams2} alt="" className="lg:w-1/5 sm:w-2/5 sm:pt-2 lg:pt-0 min-[320px]:w-2/5 md:w-2/5 min-[320px]:pt-[10px]"></Image>
            </div>
        </div>  
    );
}