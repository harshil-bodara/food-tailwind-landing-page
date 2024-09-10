import Chemical from "@/Components/chemical";
import Drink from "@/Components/drink";
import Footer from "@/Components/footer";
import Fresh from "@/Components/fresh";
import Healthy from "@/Components/healthy";
import Jams from "@/Components/jams";
import Jarred from "@/Components/jarred";
import Mainbar from "@/Components/mainbar";
import Most from "@/Components/most";
import Selling from "@/Components/selling";
import Sidebar from "@/Components/sidebar";
import Swiper from "@/Components/swiper";
import Treat from "@/Components/treat";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="lg:ml-[336px] sm:m-0">
        <Mainbar />
        <Selling />
        <Swiper />
        <Healthy />
        <Fresh />
        <Drink />
        <Most />
        <Treat />
        <Jams />
        <Jarred />
        <Chemical />
        <Footer />
       </div>
    </main>
  );
}






