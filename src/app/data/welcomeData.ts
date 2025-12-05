export const getOwnerName = () => {
  return process.env.NEXT_PUBLIC_OWNER_NAME || "votre office manager";
};

export const getCvItems = () => {
  const ownerName = getOwnerName();

  return [
    {
      id: 1,
      label:
        `Bonjour, je suis ${ownerName}, ancienne assistante dentaire qualifiée, avec une vingtaine d'années d'expérience auprès des chirurgiens dentistes. Je dispose d'un riche parcours professionnel qui m'apporte aujourd'hui de solides compétences sur de multiples aspects de la gestion dans un cabinet dentaire.`,
    },
    {
      id: 2,
      label:
        "Mon objectif: alléger votre charge administrative pour vous recentrer sur votre métier et gagner en sérénité et rentabilité.",
    },
    {
      id: 3,
      label: "Ma priorité: votre satisfaction et celle de vos patients !",
    },
    {
      id: 4,
      label:
        "Petit plus: la confidentialité. Pour les dirigeants qui préfèrent que certaines données sensibles, notamment RH ou financières, ne soient pas gérées en interne par un salarié.",
    },
  ];
};

export const getPourquoiItems = () => {
  return [
    { id: 1, label: "Se consacrer pleinement à son coeur de métier" },
    { id: 2, label: "Gagner en productivité" },
    { id: 3, label: "Se libérer du temps" },
    { id: 4, label: "Déléguer en toute sérénité et confidentialité" },
    { id: 5, label: "Maîtriser son budget" },
  ];
};

export const getServiceImages = () => {
  return [
    {
      id: 1,
      label: "Gestion administrative",
      src: "/gestion_administrative.png",
      alt: "Icône gestion administrative - secrétariat et organisation",
    },
    {
      id: 2,
      label: "Gestion commerciale",
      src: "/gestion_commerciale.png",
      alt: "Icône gestion commerciale - facturation et suivi",
    },
    {
      id: 3,
      label: "Gestion du personnel",
      src: "/gestion_du_personnel.png",
      alt: "Icône gestion du personnel - ressources humaines",
    },
    {
      id: 4,
      label: "Pré-comptabilité",
      src: "/gestion_pré_comptabilité.png",
      alt: "Icône pré-comptabilité - gestion financière",
    },
  ];
};
