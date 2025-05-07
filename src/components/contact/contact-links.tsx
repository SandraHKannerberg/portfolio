import { contactLinks } from "@/constants";
import LinkWithIcon from "../ui/link-with-icon";

const ContactLinks = () => {
  return (
    <section className="flex flex-col gap-3">
      {contactLinks.map((link, index) => (
        <LinkWithIcon
          key={index}
          label={link.label}
          url={link.url}
          className="justify-between"
          newTab
        />
      ))}
    </section>
  );
};

export default ContactLinks;
