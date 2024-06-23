import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8 flex justify-between items-center gap-2">
      <Link className="flex items-center gap-2" href="/">
        <span className="font-semibold">Mo</span>
      </Link>

      <nav className="flex gap-2 lg:gap-4">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/portfolio"
        >
          Portfolio
        </Link>

        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
