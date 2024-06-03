import { describe } from "node:test";
import { GrValidate } from "react-icons/gr";

export default function VosAvantages(): JSX.Element {
  const avantagesArray = [
    {
      id: "1",
      titre: "Libérez-vous de vos tâches administratives !",
      description:
        "Vous souhaitez déléguer votre administratif pour vous consacrer à votre cœur de métier ?",
    },
    {
      id: "2",
      titre: "Gagnez du temps, consacrer à votre cœur de métier !",
      description: "Vous rencontrez un surcroît d'activité ?",
    },
    {
      id: "3",
      titre: "Externalisez votre administratif pour plus de sérénité !",
      description:
        "Votre collaborateur est absent et vous souhaitez assurer un suivi pendant son absence ?",
    },
    {
      id: "4",
      titre: "Externalisez votre administratif pour plus de sérénité !",
      description:
        "L'externalisation de votre administratif est la solution à vos besoins !",
    },
    {
      id: "5",
      titre: "Externalisez votre administratif pour plus de sérénité !",
      description:
        "L'externalisation de votre administratif est la solution à vos besoins !",
    },
  ];
  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 p-6 border-2">
      <h3 className="text-2xl ">Vos avantages</h3>
      <div className="flex flex-wrap border-2  justify-center gap-8">
        {avantagesArray.map((avantage) => (
          <div key={avantage.id} className="flex flex-col w-1/4 items-center">
            <div className="flex flex-row  gap-4 p-2 items-center justify-center">
              <GrValidate className="w-16 h-16" />
              <h4 className="font-bold">{avantage.titre}</h4>
            </div>
            <div className="p-2">
              <p>{avantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
