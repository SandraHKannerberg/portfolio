"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/utils/animations";
import Link from "next/link";

interface TransitionLinkProps {
  href: string;
  label: string;
  className?: string;
}

const TransitionLink = ({ href, label, className }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative pb-1 transition hover:underline hover:font-bold cursor-pointer ${
        pathname === href
          ? "font-bold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-primary"
          : "after:w-0 after:bg-primary hover:after:w-full"
      }`}
    >
      {label}
    </Link>
  );
};

export default TransitionLink;
