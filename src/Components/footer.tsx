import Image from "next/image";
import footer from "../asset/Frame.png";

const footers = [
    { title: 'Healthy sweets', },
    { title: 'Helthy snacks', },
    { title: 'Beverages', },
    { title: 'Sweets', },
    { title: 'Sale', },
    { title: 'Jams & Preserves', },
];
const footers1 = [
    { title: 'Canned & Jarred food', },
    { title: 'Fresh fruits & Vegetables' },
    { title: 'Detegrents', },
    { title: 'Teas', },
    { title: 'Sale', },
];
const footers2 = [
    { title: 'Terms of service', },
    { title: 'Refund policy', },
    { title: 'Privacy police', },
    { title: 'Shipping police', },
];

export default function Footer() {
    return (
        <div className="lg:px-0 bg-[#F8F7F5] mt-10 h-full min-[320px]:px-2 md:px-0">
            <div className="flex lg:px-0 md:pt-7 sm:pt-7 min-[320px]:pt-6 min-[320px]:pe-[60px] min-[320px]:ps-[60px] lg:ps-[60px] lg:pt-8 ">
                <Image src={footer} alt="" className="lg:w-[255px] lg:h-[42px] min-[320px]:w-[255px] min-[320px]:h-[42px] lg:text-start mt-5"></Image>
            </div>
            <div className="flex justify-between lg:flex-row sm:flex-wrap  min-[320px]:flex flex-wrap min-[320px]:px-4">
                <div className="flex">
                    <div className="lg:ps-[60px]">
                        <h2 className="font-[600] text-[16px] text-[#022507] font-Roboto min-[320px]:ps-4 min-[320px]:pt-4 lg:pt-8 lg:ps-0">CATAGORIES</h2>
                        <ul>
                            {footers.map((footer) =>
                                <li className="font-[400] text-[16px] text-[#022507] font-Roboto min-[320px]:pt-3.5 lg::pt-4">{footer.title}</li>
                            )}
                        </ul>
                    </div>
                    <div className="min-[320px]:pt-6 ps-10 mt-10">
                        <ul>
                            {footers1.map((footer) =>
                                <li className="font-[400] text-[16px] text-[#022507] font-Roboto min-[320px]:pt-3.5">{footer.title}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="mt-10 lg:ps-10px min-[320px]:flex-wrap sm:ps-20 min-[320px]:pt-4">
                    <h2 className="font-[600] text-[16px] text-[#022507] font-Roboto min-[320px]:ps-4">Info</h2>
                    <ul>
                        {footers2.map((footer) =>
                            <li className="font-[400] text-[16px] text-[#022507] font-Roboto min-[320px]:pt-3.5">{footer.title}</li>
                        )}
                    </ul>
                </div>
                <div className="flex min-[320px]:pt-5 lg:-mt-20">
                    <div className="bg-[#00C462]">
                        <h2 className="text-[16px] text-white font-[600] ps-10 pt-5 font-Roboto">Contacts</h2>
                        <ul>
                            <li className="flex ps-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 ms-5 text-white mt-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <span className="text-white font-[500] text-[16px] mt-6 ms-3 font-Roboto">+971506133510</span>
                            </li>
                            <li className="flex ps-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 text-white mt-5 ms-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-white font-[500] text-[16px] mt-6 ms-3 font-Roboto">info@miragt.ae</span>
                            </li>
                            <li className="flex ps-5 pe-28">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12 text-white mt-5 ms-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <span className="text-white font-[500] text-[16px] mt-5 ms-3 font-Roboto">AL Khaleej AL Tejari 2 St<br />Bussiness Bay-Capital Golden Tower 11th floor,<br />Dubai,UAE</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};







