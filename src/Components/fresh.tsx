import Image from "next/image";
import fresh from "../asset/Frame 146.png";


export default function Fresh() {
    return (
        <div className="lg:px-20 lg:pt-[60px] min-[320px]:px-2 sm:px-4 md:px-2">
            <div className="container">
                <div className="flex justify-start lg:px-0 min-[320px]:pt-8 lg:pt-0">
                    <h1 className="font-[600] lg:text-[32px] sm:text-[24px] text-[#000000] font-Roboto min-[320px]:px-4">FRESH FRUITS FROM FARM</h1>
                </div>
                <div className="flex lg:pt-8 min-[320px]:pt-3 sm:px-4 lg:px-0 md:px-2">
                    <Image src={fresh} alt="" className="sm:w-full lg:w-full min-[320px]:w-full"></Image>
                </div>
            </div>
        </div>

    );
}