import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

export default function Contacts() {
  return (
    <div className="flex flex-col h-full w-3/4 justify-center items-center p-4 ">
      <div className="flex w-full justify-center">
        <ContactInfo />
      </div>
      <div className="flex w-full justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
