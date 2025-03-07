import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactIconsProps {
  className?: string;
  icons?: ("github" | "linkedin" | "contact")[];
}

const ICONS = {
  github: {
    href: "https://github.com/SandraHKannerberg",
    label: "GitHub",
    component: FaGithub,
  },
  linkedin: {
    href: "https://www.linkedin.com/in/sandra-h%C3%B6st-kannerberg-086a9b7b/",
    label: "LinkedIn",
    component: FaLinkedin,
  },
  contact: {
    href: "/contact",
    label: "Contact",
    component: FaEnvelope,
  },
};

export default function ContactIcons({
  className,
  icons = ["github", "linkedin", "contact"],
}: ContactIconsProps) {
  return (
    <section className="flex justify-center items-center gap-3 w-[fit-content] mx-auto">
      {icons.map((key) => {
        const Icon = ICONS[key].component;
        return (
          <a
            key={key}
            href={ICONS[key].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${ICONS[key].label}`}
            className={`hover:text-secondary hover:scale-110 transition-all ${className}`}
          >
            <Icon />
          </a>
        );
      })}
    </section>
  );
}
