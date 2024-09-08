import { FcAssistant } from "react-icons/fc";
import useWelcome from "@/app/hooks/useWelcome";
import CardContainer from "../shared/cardContainer";
import Button from "../shared/button";
import Image from "next/image"; // Import the Image component from the correct package
import { sourceMapsEnabled } from "process";

const Cv = () => {
  const { arrayBuilderCvItems } = useWelcome();
  const Items = () => (
    <>
      {arrayBuilderCvItems.map(({ id, label, image }) => (
        <div
          key={id}
          className={`flex phone:flex-col flex-row items-center gap-4`}
        >
          {image && (
            <div className="w-full flex justify-center items-center">
              <div className="flex items-center justify-center phone:h-64 phone:w-36 relative h-56 w-24">
                <Image
                  src={image.src}
                  layout={image.layout}
                  objectFit={image.objectFit}
                  alt={image.alt}
                  className={image.className}
                />
              </div>
            </div>
          )}
          <p>{label}</p>
        </div>
      ))}
    </>
  );

  return (
    <CardContainer width="w-1/2 phone:w-3/4 phone:text-center ">
      <div className="flex flex-col gap-12 phone:gap-6 p-2 phone:p-2 items-center">
        <div className="flex flex-col h-1/4 gap-4">
          <div className="flex justify-center items-center w-full ">
            {/* <FcAssistant className="w-20 h-20" /> */}
            {/* <div className="phone:h-64 phone:w-36 relative h-56 w-24">
              <Image
                src="/cecile2.png"
                // width={200}
                // height={150}
                layout="fill"
                objectFit="cover"
                alt="Cécile Boiron"
                className="rounded-lg"
              />
            </div> */}
            {/* Use the Image component */}
          </div>
          <div className="flex flex-col items-start justify-center rounded-xl text-lg phone:text-sm w-full text-center phone:w-full gap-4 p-2">
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
