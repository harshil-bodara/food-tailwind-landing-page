import Image from "next/image";
import chemical from "../asset/Frame 148.png";
import chemical1 from "../asset/Frame 229.png";

export default function Chemical() {
    return (
        <div className="lg:px-20 min-[320px]:px-2 min-[320px]:pt-8 lg:pt-[60px]">
            <div className="container">
                <div className="flex justify-start lg:px-0">
                    <h1 className="lg:text-[32px] sm:text-[24px] text-[#000A24] font-[600] font-Roboto min-[320px]:px-2">CHEMICALS</h1>
                </div>
                <div className="flex lg:pt-8 sm:px-4 lg:px-0 min-[320px]:pt-4 min-[320px]:px-2 md:px-2">
                    <Image src={chemical} alt="" className="lg:w-full sm:w-3/5 min-[320px]:w-3/5 md:w-full min-[320px]:pe-2.5 sm:pe-2.5"></Image>
                    <Image src={chemical1} alt="" className="lg:hidden sm:w-3/5 min-[320px]:block w-2/5 md:hidden"></Image>
                </div>
            </div>
        </div >
    );
}