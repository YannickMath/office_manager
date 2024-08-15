import CardContainer from "../components/shared/cardContainer";
import ContactForm from "../components/contacts/contactForm";
import ContactInfo from "../components/contacts/contactInfo";

export default function Contacts() {
  const arrayBuilderSection = [
    { id: 1, name: "Contact Info", component: <ContactInfo /> },
    { id: 2, name: "Contact Form", component: <ContactForm /> },
  ];

  const ArrayBuilderContent = () => (
    <>
      {arrayBuilderSection.map(({ id, component }) => (
        <div key={id} className="flex w-full justify-center">
          <CardContainer key={id} width="w-1/2">
            {component}
          </CardContainer>
        </div>
      ))}
    </>
  );

  return (
    <div className="flex flex-col h-full w-full justify-center items-center p-2 py-4 gap-6">
      <ArrayBuilderContent />
    </div>
  );
}
