export default function TitreJob(): JSX.Element {
  return (
    <div className="bg-titreJob-bg  bg-cover bg-center flex flex-col w-full justify-center items-center p-8 text-center text-wh  gap-10">
      <div className="flex w-1/2 h-full text-base rounded-lg shadow-xl bg-zinc-50 p-4 bg-opacity-30  justify-center items-center">
        <div className="flex flex-col  gap-10 shadow-l rounded-lg">
          <h1 className="text-4xl font-medium">
            Assistante indépendante pour toutes vos tâches administratives.
          </h1>
          <p className="text-3xl">
            Service de secrétariat externalisé adapté à vos besoins
          </p>
        </div>
      </div>
      <div className="flex flex-col w-1/3 h-1/3 text-xl  justify-center items-center gap-6">
        <p>
          Pour les professionnels de santé, chefs d&apos;entreprise,
          entrepreneurs un service sur mesure.
        </p>
      </div>
    </div>
  );
}
