import { FaEnvelope } from "react-icons/fa";
import Conditions from "@/app/conditions/page";

interface FooterProps {
  isCgpsOpen: boolean;
  onToggleCgps: () => void;
}

const Footer = ({ isCgpsOpen, onToggleCgps }: FooterProps) => {
  const data = {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "OMI GESTION",
    phone: process.env.NEXT_PUBLIC_PHONE || "",
    mail: process.env.NEXT_PUBLIC_EMAIL || "",
    mentions: "Mentions légales",
    cgps: "CGPS",
  };

  const { name, phone, mail, mentions, cgps } = data;

  return (
    <footer className="relative h-16" role="contentinfo">
      <div className="flex flex-row justify-center items-center p-4 bg-customBrown phone:text-xs font-bolder">
        <div className="flex flex-row w-1/2 phone:w-full justify-around">
          <div className="flex flex-row w-1/3 justify-center items-center">
            <h1 className="bold text-center">{name}</h1>
          </div>
          <div className="flex flex-col w-1/3 items-center justify-center p-2 gap-4 text-blue-800">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline" aria-label={`Appeler au ${phone}`}>
              {phone}
            </a>
            <a
              href={`mailto:${mail}`}
              className="flex items-center gap-2 hover:underline"
              aria-label="Envoyer un email"
            >
              <FaEnvelope color="blue" aria-hidden="true" />
              <span>Mail Me</span>
            </a>
          </div>
          <div className="flex flex-col w-1/3 items-center justify-center p-2 gap-4">
            <p>{mentions}</p>
            <div className="flex flex-row items-center justify-center gap-2 text-blue-800">
              <button
                className="text-center cursor-pointer hover:underline"
                onClick={onToggleCgps}
                aria-label="Ouvrir les conditions générales de prestations de service"
              >
                {cgps}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCgpsOpen && <Conditions onClose={onToggleCgps} />}
    </footer>
  );
};

export default Footer;
