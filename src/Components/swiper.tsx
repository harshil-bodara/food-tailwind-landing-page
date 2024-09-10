'use client';
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import swiper from "../asset/bars 1 1.png";
import swiper1 from "../asset/Frame 169.png";
import swiper2 from "../asset/Frame 169 (1).png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

const swipers = [
    { title: '8.00 AED', img: swiper, text: 'Protein Bar Chocolate', text1: 'Fitroo by Khabib Nurmagomedov', text2: '50g', text3: '18.00 AED', },
    { title: '18.00 AED', img: swiper1, text: 'Caramel Corn & Rice Crispbreads', text1: 'Dr.Korner', text2: '90g', },
    { title: '11.00 AED', img: swiper2, text: 'Buckwheat Chocolate With Coconut', text1: 'Natures own factory', text2: '90g', },
    { title: '8.00 AED', img: swiper, text: 'Protein Bar Chocolate', text1: 'Fitroo by Nurmagomedov', text2: '50g', text3: '18.00 AED', },
    { title: '18.00 AED', img: swiper1, text: 'Caramel Corn & Rice Crispbreads', text1: 'Dr.Korner', text2: '90g', },
    { title: '11.00 AED', img: swiper2, text: 'Buckwheat Chocolate With Coconut', text1: 'Natures own factory', text2: '90g', },
];

// const MySwiper = () => {
//     const SwiperRef = useRef(null);
//     useEffect(() => {
//         const Swiper = SwiperRef.current;
//         const params = {
//             navigation: true,
//             pagination:true,

//         };

//     })
//     return (
//         <Swiper navigation={true} pagination={true}>
//             <SwiperSlide>slide 1</SwiperSlide>
//             <SwiperSlide>slide 2</SwiperSlide>
//             <SwiperSlide>slide 3</SwiperSlide>
//             <SwiperSlide>slide 4</SwiperSlide>
//     </Swiper>
//     )   
// }

// export default MySwiper;


export default function Swiper1() {
    return (
        <div className="lg:px-0 min-[320px]:px-2 lg:pt-8 min-[320px]:pt-4">
            <>
            <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper" 
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1536: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    // navigation={false}
                >
                    {swipers.map((swiper) =>
                        <SwiperSlide>
                            <div className="flex lg:h-[320px] sm:h-[302px] min-[320px]:h-[302px] rounded-2xl bg-[#F8F7F5] lg:pe-6">
                                <div className="relative w-100%">
                                    <Image src={swiper.img} alt="" className="lg:h-[100px] lg:w-[168px] sm:w-[152px] sm:h-[80px] min-[320px]:w-[152px] h-[80px] mt-2 mx-auto rounded-xl"></Image>
                                    <h5 className="text-[#FF3131] lg:text-[16px] sm:text-[14px] font-[600] ms-10 lg:mt-2 sm:mt-3 min-[320px]:mt-4 font-Roboto">{swiper.title}<span className="lg:text-[16px] sm:text-[14px] font-[400] ms-10 text-[#555555] font-Roboto">{swiper.text3}</span></h5>
                                    <p className="font-[500] text-[16px] text-[#555555] ms-9 lg:mt-2 sm:mt-5 min-[320px]:mt-2 font-Roboto">{swiper.text}</p>
                                    <p className="font-[400] text-[16px] text-[#555555] lg:mt-2 ms-10 sm:mt-3 min-[320px]:mt-2 font-Roboto">{swiper.text1}</p>
                                    <span className="text-[13px] text-[#919191] font-[400] ms-10 lg:mt-1 sm:mt-3 font-Roboto">{swiper.text2}</span>
                                    <div className="flex justify-center xl:pt-3 ms-2 min-[320px]:pt-5">
                                        <button className="font-Roboto bg-white lg:h-[40px] lg:w-[160px] sm:w-[155px] sm:h-[40px] min-[320px]:w-[155px] h-[40px] font-[600] lg:text-[16px] sm:text-[14px] text-[#555555] rounded-lg">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
                {/* <div className="relative min-[320px]:hidden lg:block -z-0">
                    <div className="flex items-center z-10 absolute top-auto bottom-[150px] -right-14 h-[42px] w-[42px] bg-[#00C462] rounded-full ps-2 font-[600]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div> */}
            </>
        </div>
    );
};



