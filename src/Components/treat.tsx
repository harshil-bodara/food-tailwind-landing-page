import Image from "next/image";
import treat from "../asset/Frame 139.png";
import treat1 from "../asset/Frame 140.png";
import treat2 from "../asset/Frame 141.png";
import treat3 from "../asset/Frame 142.png";

export default function Treat() {
    return (
        <div className="xl:px-20 min-[320px]:px-2 xl:pt-[60px] sm:px-4 md:px-2 lg:px-10 lg:pt-10">
            <div className="container">
                <div className="flex justify-start lg:ps-5 min-[320px]:ps-2 pt-8 lg:pt-0">
                    <h1 className="lg:text-[32px] sm:text-[24px] font-[600] text-[#000A24] font-Roboto min-[320px]:px-4">TREAT YOUR KID</h1>
                </div>
                <div className="flex lg:pt-8 sm:px-4 lg:px-0 min-[320px]:pt-4 px-2 md:px-2">
                    <Image src={treat} alt="" className="lg:w-3/5 sm:w-3/5 min-[320px]:w-3/5 min-[320px]:pe-2.5 lg:pe-6"></Image>
                    <Image src={treat1} alt="" className="lg:w-2/5 sm:w-2/5 min-[320px]:w-2/5"></Image>
                </div>
                <div className="flex lg:pt-6 min-[320px]:pt-3 sm:px-4 lg:px-0 min-[320px]:px-2 md:px-2">
                    <Image src={treat2} alt="" className="lg:w-2/5 sm:w-2/5 min-[320px]:w-2/5 pe-2.5 lg:pe-6"></Image>
                    <Image src={treat3} alt="" className="lg:w-3/5 sm:w-3/5 min-[320px]:w-3/5"></Image>
                </div>
            </div>
        </div>

    );
}