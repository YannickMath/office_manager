import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";
import SocialIcons from "./socialIcons";

export default function Contacts() {
  return (
    <div className="flex flex-col h-full   lg:ml-0 md:mt-0 mt-8 ">
      <div className="lg:w-1/2 lg:mt-8 md:ml-16  ">
        <ContactInfo />
      </div>
      <div className="lg:w-1/2 mt-8 md:ml-24">
        <ContactForm />
      </div>
      <div className="mt-5 lg:mt-4 w-1/4 mb-4 md:mb-2 lg:mb-0">
        <SocialIcons />
      </div>
    </div>
  );
}
