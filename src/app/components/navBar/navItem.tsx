import Link from "next/link";

export interface NavItemInterface {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavItem(props: NavItemInterface) {
  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      className="text-white hover:text-red-500 transition-colors flex items-center gap-1"
    >
      <span className="text-red-500">#</span>
      {props.label}
    </Link>
  );
}
