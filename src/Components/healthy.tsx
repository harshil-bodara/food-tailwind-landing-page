import Image from "next/image";
import healthy from "../asset/Frame 151.png";
import healthy1 from "../asset/Frame 152.png";
import healthy2 from "../asset/Frame 153.png";
import healthy3 from "../asset/Frame 154.png";


export default function Healthy() {
    return (
        <div className="lg:px-20 lg:pt-[60px] min-[320px]:px-2 min-[320px]:pt-8 px-4 md:px-2">
            <div className="container">
                <div className="flex justify-start lg:ps-5 sm:px-2 lg:px-0 ">
                    <h1 className="lg:text-[32px] sm:text-[24px] text-[#000000] font-[600] font-Roboto min-[320px]:ps-4">HEALTHY SWEETS - HEALTHIER BODY</h1>
                </div>
                <div className="flex lg:pt-8 sm:px-4 lg:px-0 min-[320px]:pt-4 px-2 md:px-2">
                    <Image src={healthy} alt="" className="lg:w-3/5 sm:w-3/5 min-[320px]:w-3/5 min-[320px]:pe-2.5 lg:pe-6"></Image>
                    <Image src={healthy1} alt="" className="lg:w-2/5 sm:w-2/5 min-[320px]:w-2/5"></Image>
                </div>
                <div className="flex lg:pt-6 sm:px-4 lg:px-0 px-2 min-[320px]:pt-2.5 sm:pt-2.5 md:px-2">
                    <Image src={healthy2} alt="" className="lg:w-2/5 sm:w-2/5 min-[320px]:w-2/5 min-[320px]:pe-2.5 lg:pe-6 sm:pe-2.5"></Image>
                    <Image src={healthy3} alt="" className="lg:w-3/5 sm:w-3/5 min-[320px]:w-3/5"></Image>
                </div>
            </div>
        </div>
    );
}

