
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return(
    <Link
      href={href}
      className="block py-2 pl-3 pr-3 text-black sm:text-xl rounded md:p-0 hover:text-sky-300">
        { title }
    </Link>
  );
};

export default NavLink;