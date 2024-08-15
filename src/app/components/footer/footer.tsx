import { FooterDataProps } from "@/app/interface/footerInterface";

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

  return (
    <div
      className="flex flex-row justify-center items-center text-base p-4 bg-gray-200
                phone:text-xs "
    >
      <div className="flex flex-row w-1/2 justify-around">
        <div className="flex flex-row w-1/3 justify-center items-center">
          <h1 className="bold">{name}</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <p>{phone}</p>
          <p>{mail}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-2 gap-4">
          <p>{note}</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <p>{mentions}</p>
            <h2 className="underline text-center">{cgps}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
