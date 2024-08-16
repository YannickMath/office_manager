import Titre from "../shared/titre";

const Banner = (): JSX.Element => {
  const title = "OFFICE MANAGER INDEPENDANT";
  const description =
    "Collaborateur externe pour la gestion et le développement de votre cabinet dentaire";

  return <Titre title={title} description={description} />;
};

export default Banner;
