import { FooterDataProps } from "@/app/interface/footerInterface";
import Link from "next/link";

const Footer = () => {
  const data: FooterDataProps = {
    name: "OMI GESTION",
    phone: "06 21 89 91 32",
    mail: "omi.cb.contact@gmail.com",
    note: "Politique de confidentialité",
    mentions: "Mentions légales",
    cgps: "CGPS",
  };

  const { name, phone, mail, note, mentions, cgps } = data;

  const handleNavigateToCGPS = () => {
    // navigate to CGPS page
  };

  return (
    <div
      className="flex flex-row justify-center items-center  p-4 bg-customBrown 
                phone:text-xs font-bolder"
    >
      <div className="flex flex-row w-1/2 phone:w-full justify-around">
        <div className="flex flex-row w-1/3 justify-center items-center">
          <h1 className="bold text-center">{name}</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <p>{phone}</p>
          <p>
            <a
              href={`mailto:${mail}`}
              className="hover:underline hover:text-blue-800"
            >
              {mail}
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <p>{note}</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <p>{mentions}</p>
            <Link
              href={"/conditions"}
              className="underline text-center cursor-pointer hover:text-blue-800"
            >
              {cgps}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
