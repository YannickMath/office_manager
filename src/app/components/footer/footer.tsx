import { FaEnvelope } from "react-icons/fa";
import Conditions from "@/app/conditions/page";

interface FooterProps {
  isCgpsOpen: boolean;
  onToggleCgps: () => void;
}

const Footer = ({ isCgpsOpen, onToggleCgps }: FooterProps) => {
  const data = {
    name: "OMI GESTION",
    phone: "06 21 89 91 32",
    mail: "omi.cb.contact@gmail.com",
    mentions: "Mentions légales",
    cgps: "CGPS",
  };

  const { name, phone, mail, mentions, cgps } = data;

  return (
    <div className="relative h-20">
      <div className="flex flex-row justify-center items-center p-4 bg-customBrown phone:text-xs font-bolder">
        <div className="flex flex-row w-1/2 phone:w-full justify-around">
          <div className="flex flex-row w-1/3 justify-center items-center">
            <h1 className="bold text-center">{name}</h1>
          </div>
          <div className="flex flex-col w-1/3 items-center justify-center p-2 gap-4 text-blue-800">
            <p>{phone}</p>
            <p>
              <a
                href={`mailto:${mail}`}
                className="flex items-center gap-2 hover:underline"
              >
                <FaEnvelope color="blue" />
                <span className="">Mail Me</span>
              </a>
            </p>
          </div>
          <div className="flex flex-col w-1/3 items-center justify-center p-2 gap-4">
            <p>{mentions}</p>
            <div className="flex flex-row items-center justify-center gap-2 text-blue-800">
              <p
                className="text-center cursor-pointer hover:underline"
                onClick={onToggleCgps}
              >
                {cgps}
              </p>
            </div>
          </div>
        </div>
      </div>
      {isCgpsOpen && <Conditions onClose={onToggleCgps} />}
    </div>
  );
};

export default Footer;
