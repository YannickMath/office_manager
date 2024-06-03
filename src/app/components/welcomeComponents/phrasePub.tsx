import Button from "../shared/button";

export default function PhrasePub(): JSX.Element {
  const phrasesArray = [
    { id: "1", speech: "Libérez-vous de vos tâches administratives !" },
    {
      id: "2",
      speech: "Gagnez du temps pour vous consacrer à votre cœur de métier !",
    },
    {
      id: "3",
      speech: "Externalisez votre administratif pour plus de sérénité !",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col h-full justify-around items-center text-xl border-2 p-6  gap-4">
        {phrasesArray.map((phrase) => (
          <h2 key={phrase.id} className="text-center">
            {phrase.speech}
          </h2>
        ))}
      </div>
      <Button
        color="indigo"
        label="Voir mes prestations"
        url="/mes-prestations"
      />
    </div>
  );
}
