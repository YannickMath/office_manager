import React from "react";

import { HiUserCircle, HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactInfo = () => {
  const infoPersonnel = {
    nom: "Cécile BOIRON",
    adresse: "69007 LYON",
    activité: "Office Manager Indépendant",
    email: "omi.cb.contact@gmail.com",
    téléphone: "06 00 00 00 00",
  };

  const { nom, adresse, activité, email, téléphone } = infoPersonnel;

  const arrayBuilderIcons = [
    { id: 1, icon: <HiUserCircle />, text: nom },
    { id: 2, icon: <HiLocationMarker />, text: adresse },
    { id: 3, icon: <AiFillMail />, text: email },
    { id: 4, icon: <BsFillTelephoneFill />, text: téléphone },
  ];

  return (
    <div className="flex flex-col gap-6 text-lg">
      <div className="flex flex-col">
        <div className="w-3/4 lg:w-full">
          <p>{activité}</p>
        </div>
      </div>
      <div className="flex flex-col">
        {arrayBuilderIcons.map(({ id, icon, text }) => {
          return (
            <div key={id} className="flex items-center w-3/4 lg:w-full gap-4 ">
              <div className="text-purple-700">{icon}</div>
              <div>
                {id === 3 ? (
                  <a
                    href={`mailto:${email}`}
                    className={`
                      ${
                        id === 3
                          ? "cursor-pointer hover:underline hover:text-blue-800"
                          : ""
                      }`}
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
