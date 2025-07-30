import Link from "next/link";

const FooterLink = ({ href, children }) => (
  <Link href={href} className="hover:underline">
    {children}
  </Link>
);

export default FooterLink;
