import Banner from "./components/welcome/banner";
import Cv from "./components/welcome/cv";
import Pourquoi from "./components/welcome/pourquoi";
import Prestations from "./components/welcome/prestations";

export default function Home() {
  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center gap-10 py-6
    bg-office-manager-main-bg bg-cover bg-center bg-no-repeat
    phone:bg-contain phone:bg-bottom phone:bg-gray-200 "
    >
      <div className="w-full">
        <Banner />
      </div>
      <div className="flex w-full justify-center">
        <Pourquoi />
      </div>
      <div className="flex w-full justify-center">
        <Cv />
      </div>
      <div className="flex w-full justify-center mb-10">
        <Prestations />
      </div>
    </div>
  );
}
