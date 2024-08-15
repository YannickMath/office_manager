import { FcAssistant } from "react-icons/fc";
import Button from "../../shared/button";
import CardContainer from "../../shared/cardContainer";
import useWelcome from "@/app/hooks/useWelcome";

const Cv = () => {
  const { arrayBuilderCvItems } = useWelcome();
  const Items = () => (
    <>
      {arrayBuilderCvItems.map(({ id, label }) => (
        <p key={id}>{label}</p>
      ))}
    </>
  );

  return (
    <CardContainer width="w-1/2">
      <div className="flex flex-col gap-12 p-6">
        <div className="flex flex-row h-1/4">
          <div className="flex justify-center  items-center w-1/3">
            <FcAssistant className="w-20 h-20" />
          </div>
          <div className="flex flex-col items-start justify-center rounded-xl text-l w-2/3 gap-4 p-2">
            <Items />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <Button
            color="indigo"
            label="Contactez moi"
            url="/contacts"
            size="normal"
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default Cv;
