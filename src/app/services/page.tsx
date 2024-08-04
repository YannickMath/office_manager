import React from "react";
import Titre from "../utils/titre";
import Button from "../utils/button";
import Image from "next/image";

const IntroductionItems = ({ items }: any) => {
  return items.map(({ id, label }: { id: number; label: string }) => (
    <p key={id}>{label}</p>
  ));
};

const ListItems = ({ list }: any) => {
  return list.map((item: string, index: number) => <li key={index}>{item}</li>);
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
  list: any;
}) => {
  return (
    <div
      key={id}
      className="flex flex-col w-full bg-gray-200 p-4 rounded-lg gap-6"
    >
      <div className="flex flex-row gap-4 items-center justify-center">
        <Image src={src} alt={alt} width={100} height={100} />
        <h2 className="text-2xl font-bold">{label}</h2>
      </div>
      <ul className="flex flex-col gap-1 items-center">
        <ListItems list={list} />
      </ul>
    </div>
  );
};

export default function Services() {
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
      src: "/gestion_administrative.webp",
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
      src: "/gestion_administrative.webp",
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
      src: "/gestion_administrative.webp",
      alt: "secretariat3",
      list: [
        "Aide au recrutement: rédaction et diffusion des offres d'emploi ; sélection des candidatures et entretiens.",
        "Gestion des contrats de travail (renouvellement période d'essai)",
        "Organisation des plannings (remplacements, congés, absences)",
        "Suivi des dossiers du personnel (visites médicales, formations)",
        "Tenue des registres du personnel (heures supplémentaires, absences, congés)",
        "Reporting des heures mensuelles pour la paie",
        "Accompagnement dans la formation des assistantes",
      ],
    },
    {
      id: 4,
      label: "Pré-comptabilité",
      src: "/gestion_administrative.webp",
      alt: "secretariat4",
      list: [
        "Classement et transmission des pièces comptables à votre expert-comptable.",
        "Enregistrement et règlement des factures fournisseurs.",
        "Suivi des notes de frais, rapprochement bancaire.",
        "Suivi de trésorerie.",
        "Création et mise à jour des tableaux de bord.",
      ],
    },
  ];

  return (
    <div className="h-full w-full">
      <Titre
        title="Mes services"
        description="Découvrez les services que je propose"
      />
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="flex flex-col bg-gray-200 text-xl p-4 rounded-lg gap-4 items-center">
          <IntroductionItems items={introductionItems} />
        </div>
        <div className="flex w-full justify-center">
          <Button
            size="small"
            label="Contactez-moi"
            url="/contact"
            color="indigo"
          />
        </div>
        <div className="flex flex-col w-3/4 gap-4">
          {services.map((service) => (
            <ServiceSection key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
