import useWelcome from "@/app/hooks/useWelcome";
import CardContainer from "../shared/cardContainer";
import Button from "../shared/button";
import Image from "next/image"; // Import the Image component from the correct package

const Cv = () => {
  const { arrayBuilderCvItems } = useWelcome();
  const Items = () => (
    <>
      {arrayBuilderCvItems.map(({ id, label }) => (
        <div key={id} className={`flex flex-col items-center gap-4`}>
          <p className="w-full text-start">{label}</p>
        </div>
      ))}
    </>
  );

  return (
    <CardContainer width="w-1/2 phone:w-3/4 ">
      <div className="flex flex-col gap-12 phone:gap-6 phone:text-center p-2 phone:p-2 items-center">
        <div className="flex flex-col h-1/4 gap-4">
          <div className="flex flex-row phone:flex-col items-start justify-center rounded-xl text-base phone:text-sm w-full text-center phone:w-full gap-4 p-2">
            <div className="flex items-center justify-center phone:h-64 phone:w-36 relative h-56 w-24">
              <Image
                src="/cecile2.png"
                layout="fill"
                objectFit="cover"
                alt="Cécile Boiron"
                className="rounded-lg"
              />
            </div>
            {/* <div className="flex flex-col"> */}
            <Items />
            {/* </div> */}
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
