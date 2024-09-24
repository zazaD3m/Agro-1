import { AtSign, Building2 } from "lucide-react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <section className="bg-accent-dark px-1 pb-32 pt-6 xs:px-2 sm:pt-8 lg:pt-24">
      <div className="container flex flex-col items-center justify-center">
        <ContactForm />
        <div className="flex justify-center pt-12">
          <div>
            <div className="flex gap-x-2 pb-2">
              <Building2 size={18} />
              შპს აგროეზო
            </div>
            <a
              href="mailto:info@agroezo.ge"
              className="flex items-center gap-x-2"
            >
              <AtSign size={18} />
              info@agroezo.ge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
