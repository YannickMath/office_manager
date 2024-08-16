const useWelcome = () => {
  const arrayBuilderCvItems = [
    {
      id: 1,
      label:
        "Bonjour, je suis Cécile Boiron, ancienne ADQ, avec de 15 ans d'expérience en cabinet dentaire, je dispose d'un riche parcours professionnel qui m'apporte aujourd'hui de solides compétences sur de multiples aspects de la gestion dans un cabinet dentaire",
    },
    {
      id: 2,
      label:
        "Mon objectif: alléger votre charge administrative pour vous recentrer sur votre métier et gagner en sérénité et rentabilité.",
    },
    {
      id: 3,
      label: "Ma priorité: votre satifsaction et celle de vos patients !",
    },
    {
      id: 4,
      label:
        "Petit plus: la confidentialité. Pour les dirigeants qui préfèrent que certaines données sensibles, notamment RH ou financières, ne soient pas gérées en interne par un salarié.",
    },
  ];

  const arrayBuilderPourquoiItems = [
    { id: 1, label: "Se consacrer pleinement à son coeur de métier" },
    { id: 2, label: "Gagner en productivité" },
    { id: 3, label: "Se libérer du temps" },
    { id: 4, label: "Déléguer en toute sérénité et confidentialité" },
    { id: 5, label: "Maîtriser son budget" },
    { id: 5, label: "Sans engagement" },
  ];

  const arrayBuilderImages = [
    {
      id: "1",
      label: "Gestion administrative",
      src: "/gestion_administrative.png",
      alt: "secretariat",
    },
    {
      id: "2",
      label: "Gestion commerciale",
      src: "/gestion_commerciale.png",
      alt: "secretariat2",
    },
    {
      id: "3",
      label: "Gestion du personnel",
      src: "/gestion_du_personnel.png",
      alt: "secretariat3",
    },
    {
      id: "4",
      label: "Pré-comptabilité",
      src: "/gestion_pré_comptabilité.png",
      alt: "secretariat4",
    },
  ];

  return { arrayBuilderCvItems, arrayBuilderPourquoiItems, arrayBuilderImages };
};

export default useWelcome;
