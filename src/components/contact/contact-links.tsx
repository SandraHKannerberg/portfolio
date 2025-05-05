import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  {
    href: "https://www.linkedin.com/in/sandra-h%C3%B6st-kannerberg-086a9b7b/",
    label: "LinkedIn",
  },
  { href: "https://github.com/SandraHKannerberg", label: "GitHub" },
];

const ContactLinks = () => {
  return (
    <section className="flex flex-col gap-3">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="flex justify-between items-center w-full gap-5 hover:underline"
        >
          <span>{link.label}</span>
          <ArrowUpRight />
        </Link>
      ))}
    </section>
  );
};

export default ContactLinks;
