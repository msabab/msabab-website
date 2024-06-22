import { SunIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <Link className="flex items-center gap-2" href="#">
          <SunIcon className="h-6 w-6" />
          <span className="font-semibold">Jane Doe</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-2 lg:flex-row lg:gap-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Portfolio
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Blog
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
