import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

const useServices = () => {
  const introductionItems = [
    {
      id: 1,
      label:
        "Chaque client est important. Mon objectif est de vous apporter satisfaction et sérénité.",
    },
    {
      id: 2,
      label: "Vous souhaitez me déléguer votre administratif ?",
    },
    {
      id: 3,
      label: "Discutons ensemble de vos besoins.",
    },
  ];

  const services = [
    {
      id: 1,
      label: "Gestion administrative",
      src: "/gestion_administrative.png",
      alt: "secretariat",
      list: [
        "Gestion des mails et du courrier.",
        "Gestion des plannings.",
        "Mise à jour des bases de données des dossiers médicaux.",
        "Classement, numérisation et archivage.",
        "Dématérialisation - Suivi des traçabilités.",
        "Saisie, correction et mise en page de documents.",
        "Aide à l'organisation de votre secrétariat.",
        "Support en présentiel, Assistante accueil - Secrétaire médicale.",
        "Remplacement d'un collaborateur.",
      ],
    },
    {
      id: 2,
      label: "Gestion commerciale",
      src: "/gestion_commerciale.png",
      alt: "secretariat2",
      list: [
        "Création et mise à jour des fichiers prestataires et fournisseurs.",
        "Suivi des commandes et des livraisons.",
        "Facturation et suivi des règlements.",
        "Relance des impayés.",
        "Gestion des stocks, analyse des consommations.",
      ],
    },
    {
      id: 3,
      label: "Gestion du personnel",
      src: "/gestion_du_personnel.png",
      alt: "secretariat3",
      list: [
        "Rédaction et diffusion des offres d'emploi.",
        "Sélection des candidatures et entretiens.",
        "Gestion des contrats de travail",
        "Organisation des plannings",
        "Suivi des dossiers du personnel",
        "Tenue des registres du personnel",
        "Reporting des heures mensuelles pour la paie",
        "Accompagnement dans la formation des assistantes",
      ],
    },
    {
      id: 4,
      label: "Pré-comptabilité",
      src: "/gestion_pré_comptabilité.png",
      alt: "secretariat4",
      list: [
        "Classement et transmission des pièces comptables à votre expert.",
        "Enregistrement et règlement des factures fournisseurs.",
        "Suivi des notes de frais, rapprochement bancaire.",
        "Suivi de trésorerie.",
        "Création et mise à jour des tableaux de bord.",
      ],
    },
  ];

  const IntroductionItems = ({
    items,
  }: {
    items: { id: number; label: string }[];
  }) => {
    return items.map(({ id, label }: { id: number; label: string }) => (
      <p key={id} className="text-center">
        {label}
      </p>
    ));
  };

  const ListItems = ({ list }: { list: string[] }) => {
    return list.map((item: string, index: number) => (
      <ul
        key={index}
        className="flex flex-row items-center gap-2 phone:text-sm"
      >
        <BsArrowRightShort className="flex-shrink-0 w-4 h-4" />
        <li>{item}</li>
      </ul>
    ));
  };
  const ServiceSection = ({
    id,
    label,
    src,
    alt,
    list,
  }: {
    id: number;
    label: string;
    src: string;
    alt: string;
    list: string[];
  }) => {
    return (
      <div
        key={id}
        className="flex flex-col w-full h-full p-4 rounded-lg gap-6"
        id={label.replace(/\s+/g, "-").toLowerCase()}
      >
        <div className="flex flex-row phone:flex-col w-full gap-6 items-center">
          <div className="phone:w-12 phone:h-12 w-24 h-24 relative">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="w-full text-2xl phone:text-lg font-bold text-center">
            {label}
          </h2>
        </div>
        <ul className="flex flex-col gap-2">
          <ListItems list={list} />
        </ul>
      </div>
    );
  };

  return { introductionItems, services, IntroductionItems, ServiceSection };
};

export default useServices;
