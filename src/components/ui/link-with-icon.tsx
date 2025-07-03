import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { ILink } from "@/interfaces/link";

type LinkWithIconProps = ILink & {
  icon?: ReactNode;
  className?: string;
  newTab?: boolean;
};

const LinkWithIcon = ({
  label,
  url,
  icon,
  className = "",
  newTab = false,
}: LinkWithIconProps) => {
  return (
    <Link
      href={url}
      className={`flex items-center w-full gap-5 hover:underline ${className}`}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {label}
      {icon || <ArrowUpRight />}
    </Link>
  );
};

export default LinkWithIcon;
