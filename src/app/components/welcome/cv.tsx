import { FcAssistant } from "react-icons/fc";
import useWelcome from "@/app/hooks/useWelcome";
import CardContainer from "../shared/cardContainer";
import Button from "../shared/button";
import Image from "next/image"; // Import the Image component from the correct package

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
    <CardContainer width="w-1/2 phone:w-3/4 phone:text-center">
      <div className="flex flex-col gap-12 phone:gap-6 p-6 phone:p-2 items-center">
        <div className="flex flex-row phone:flex-col h-1/4">
          <div className="flex justify-center items-center w-1/3 phone:w-full ">
            {/* <FcAssistant className="w-20 h-20" /> */}
            <div className="phone:h-64 phone:w-36 relative">
              <Image
                src="/cecile2.png"
                // width={200}
                // height={150}
                layout="fill"
                objectFit="cover"
                alt="Cécile Boiron"
                className="rounded-lg"
              />
            </div>
            {/* Use the Image component */}
          </div>
          <div className="flex flex-col items-start justify-center rounded-xl text-lg phone:text-sm w-2/3 phone:w-full gap-4 p-2">
            <Items />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <Button label="Contactez moi" url="/contacts" size="normal" />
        </div>
      </div>
    </CardContainer>
  );
};

export default Cv;
