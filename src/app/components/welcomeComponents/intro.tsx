export default function Intro(): JSX.Element {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2 p-4 border-2">
      <div className="flex flex-col w-full h-1/4  items-center gap-1 text-l text-center">
        <p>
          Vous souhaitez déléguer votre administratif pour vous consacrer à
          votre cœur de métier ?
        </p>
        <p>Vous rencontrez un surcroît d&apos;activité ?</p>
        <p>
          Votre collaborateur est absent et vous souhaitez assurer un suivi
          pendant son absence ?
        </p>
        <p>
          L&apos;externalisation de votre administratif est la solution à vos
          besoins !
        </p>
      </div>
      <div></div>
    </div>
  );
}
