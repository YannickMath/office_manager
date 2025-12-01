import Banner from "./components/welcome/banner";
import Cv from "./components/welcome/cv";
import Pourquoi from "./components/welcome/pourquoi";
import Prestations from "./components/welcome/prestations";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center phone:bg-contain phone:bg-bottom phone:bg-gray-100">
      <Image
        src="/office_manager_main.png"
        fill
        style={{ objectFit: "cover" }}
        alt="Office background"
        priority
        className="z-[-1]"
      />
      <div className="w-full phone:mt-2 animate-fadeInUp">
        <Banner />
      </div>
      <div className="flex w-full justify-center py-10 phone:py-6 animate-fadeInUp animate-delay-100">
        <Pourquoi />
      </div>
      <div className="flex w-full justify-center py-10 phone:py-6 animate-fadeInUp animate-delay-200">
        <Cv />
      </div>
      <div className="flex w-full justify-center py-10 phone:py-6 animate-fadeInUp animate-delay-300">
        <Prestations />
      </div>
    </div>
  );
}
