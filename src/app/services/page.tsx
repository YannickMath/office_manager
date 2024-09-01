import React from "react";

import Titre from "../components/shared/titre";
import Button from "../components/shared/button";
import CardContainer from "../components/shared/cardContainer";
import useServices from "../hooks/useServices";

const Services = () => {
  const { services, introductionItems, IntroductionItems, ServiceSection } =
    useServices();

  return (
    <div
      className="h-full w-full py-6
    bg-office-manager-main-bg bg-cover bg-center bg-no-repeat
    "
    >
      <Titre
        title="Mes services"
        description="Découvrez les services que je propose"
      />
      <div className="flex flex-col items-center gap-8 p-4">
        <CardContainer width="w-1/2 phone:w-full" bgColor="bg-grey-250">
          <IntroductionItems items={introductionItems} />
        </CardContainer>
        <div className="flex w-full justify-center">
          <Button size="normal" label="Contactez-moi" url="/contacts" />
        </div>
        <div className="grid grid-cols-2 phone:flex phone:flex-col w-3/4 phone:w-4/5 gap-12">
          {services.map((service) => (
            <CardContainer key={service.id} width="w-full">
              <ServiceSection key={service.id} {...service} />
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
