import Banner from "./components/welcome/banner";
import Cv from "./components/welcome/cv";
import Pourquoi from "./components/welcome/pourquoi";
import Prestations from "./components/welcome/prestations";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full h-full justify-center items-center gap-10 py-6 phone:bg-contain phone:bg-bottom phone:bg-gray-200">
      <Image
        src="/office_manager_main.png"
        layout="fill"
        objectFit="cover"
        alt="Office background"
        priority
        className="z-[-1]"
      />
      <div className="w-full">
        <Banner />
      </div>
      <div className="flex w-full justify-center">
        <Pourquoi />
      </div>
      <div className="flex w-full justify-center">
        <Cv />
      </div>
      <div className="flex w-full justify-center">
        <Prestations />
      </div>
    </div>
  );
}
