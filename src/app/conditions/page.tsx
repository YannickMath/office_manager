"use client";

import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Conditions = ({ onClose }: any) => {
  const termsAndConditions = [
    {
      id: 1,
      title: "Objet",
      content:
        "Les présentes Conditions Générales de Prestations de Services (ci-après 'CGPS') ont pour objet de définir les termes et conditions dans lesquels [Nom du Freelance] (ci-après 'Cécile Boiron E.I'), propose ses services d'office management en tant que freelance, via le site internet <https />cecileboiron.com.",
    },
    {
      id: 2,
      title: "Services Proposés",
      content:
        "Cécile Boiron E.I propose des services de gestion administrative, gestion commerciale, gestion du personnel, et pré-comptabilité. Le détail des services proposés est disponible sur le site internet <https />cecileboiron.com.",
    },
    {
      id: 3,
      title: "Acceptation des Conditions Générales",
      content:
        "Toute commande de services implique l'acceptation pleine et entière des présentes CGPS par le client, à l'exclusion de tout autre document.",
    },
    {
      id: 4,
      title: "Commande des Services",
      content:
        "Les services sont commandés directement via le site internet [Nom du Site ou URL] ou par contact direct avec Cécile Boiron E.I. Une fois la commande validée, un devis est établi, mentionnant les prestations, les tarifs, et les délais de réalisation.",
    },
    {
      id: 5,
      title: "Tarifs et Modalités de Paiement",
      content:
        "Les tarifs sont indiqués en euros TTC, la TVA ne s'applique pas. Le paiement des prestations se fait selon les modalités précisées dans le devis accepté par le client. Le non-paiement à la date d’échéance pourra entraîner la suspension des services.",
    },
    {
      id: 6,
      title: "Obligations du Prestataire",
      content:
        "Cécile Boiron E.I s'engage à fournir les services commandés conformément aux règles de l'art et aux spécifications convenues avec le client. Cécile Boiron E.I s'engage à respecter la confidentialité des informations communiquées par le client dans le cadre de l’exécution des prestations.",
    },
    {
      id: 7,
      title: "Obligations du Client",
      content:
        "Le client s'engage à fournir toutes les informations et documents nécessaires à la réalisation des prestations. Le client est responsable de la véracité et de l'exactitude des informations communiquées au Prestataire.",
    },
    {
      id: 8,
      title: "Délais de Réalisation",
      content:
        "Les délais de réalisation sont indiqués à titre indicatif et peuvent être modifiés en fonction des contraintes techniques ou des demandes spécifiques du client.",
    },
    {
      id: 9,
      title: "Responsabilité",
      content:
        "Cécile Boiron E.I n'est responsable que des dommages directs et prouvés résultant d'une faute contractuelle. En aucun cas, Cécile Boiron E.I ne saurait être tenu responsable des dommages indirects, perte de profit ou d’exploitation.",
    },
    {
      id: 10,
      title: "Propriété Intellectuelle",
      content:
        "Tous les éléments du site internet <https />cecileboiron.com, y compris les textes, images, logos et documents, sont la propriété exclusive du Prestataire, sauf mention contraire. Toute reproduction ou utilisation sans autorisation est strictement interdite.",
    },
    {
      id: 11,
      title: "Confidentialité",
      content:
        "Cécile Boiron E.I s'engage à ne pas divulguer les informations confidentielles du client, sauf accord préalable écrit ou en cas de demande légale.",
    },
    {
      id: 12,
      title: "Modification des CGPS",
      content:
        "Cécile Boiron E.I se réserve le droit de modifier les présentes CGPS à tout moment. Les nouvelles CGPS seront applicables dès leur publication sur le site internet <https />cecileboiron.com.",
    },
    {
      id: 13,
      title: "Droit Applicable et Juridiction",
      content:
        "Les présentes CGPS sont soumises au droit français. En cas de litige, les parties s'efforceront de résoudre à l'amiable tout différend avant de recourir aux tribunaux compétents.",
    },
  ];

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay avec effet blur */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Contenu de la modal */}
      <div className="relative bg-white w-3/4 h-[90%] rounded-lg shadow-lg z-50">
        {/* Titre et icône de fermeture */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl phone:text-base font-bold text-center flex-grow">
            Conditions Générales de Prestations de Services
          </h2>
          <div
            className="cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <IoIosCloseCircleOutline className="w-10 h-10 phone:w-6 phone:h-6" />
          </div>
        </div>
        <div className="overflow-y-auto h-[90%] px-8 py-4  phone:text-sm">
          {termsAndConditions.map(({ id, title, content }) => (
            <div key={id} className="flex flex-col py-4">
              <div className="flex flex-row items-center underline font-medium">
                <h2>{id}.</h2>
                <h2 className="ml-2">{title}</h2>
              </div>
              <p className="mt-2">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conditions;
