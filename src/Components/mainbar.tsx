'use client';
import Image from "next/image";
import main from "../asset/image 6.png";
import main1 from "../asset/Frame 122.png";
import main2 from "../asset/Frame 226.svg";
import main3 from "../asset/Frame 225.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const swipers = [
    { img: main },
    { img: main },
    { img: main },
];
export default function Mainbar() {
    return (
        <div className="lg:px-20 min-[320px]:pt-12 sm:pt-4 md:pt-2 lg:pt-[60px] sm:px-4 md:px-2">
            <div className="flex lg:flex-row sm:flex-col min-[320px]:flex-col min-[320px]:pt-[17px] md:pt-0 md:px-2">
                <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} loop={true} className="myswiper lg:w-4/5 min-[320px]:w-full">
                    {swipers.map((swiper) =>
                        <SwiperSlide>
                            <Image src={main} alt="" className="lg:w-full md:px-0 min-[320px]:px-2 lg:pe-3 lg:4/5 sm:w-full rounded-2xl sm:px-4 lg:px-0 sm:mt-10 lg:pt-0 lg:mt-0 text-[#555555] min-[320px]:w-full"></Image>
                        </SwiperSlide>
                    )}
                </Swiper>
                <div className="flex lg:flex-col sm:flex-row sm:px-4 lg:px-0 lg:w-2/5 min-[320px]:flex-row min-[320px]:pt-[10px] lg:pt-0 px-2 md:px-2">
                    <Image src={main1} alt="" className="sm:pt-3 lg:w-full sm:2/5 min-[320px]:w-3/5 min-[320px]:pt-3 md:w-3/5 min-[320px]:pe-2.5"></Image>
                    <Image src={main3} alt="" className="sm:pt-3 lg:w-full lg:block sm:hidden min-[320px]:hidden w-full sm:2/5 md:block md:w-3/5"></Image>
                    <Image src={main2} alt="" className="lg:w-full sm:w-2/5 lg:ps-5 sm:pt-3 lg:hidden sm:block min-[320px]:w-2/5 pt-3 md:hidden"></Image>
                </div>
            </div>
        </div>
    );
}









