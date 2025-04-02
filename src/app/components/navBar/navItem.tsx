import Link from "next/link";

export interface NavItemInterface {
  href: string;
  label: string;
}

export default function NavItem(props: NavItemInterface) {
  return (
    <Link href={"props.url"} className="flex items-center gap-2">
      <span className="text-red-500">#</span>
      {props.label}
    </Link>
  );
}
