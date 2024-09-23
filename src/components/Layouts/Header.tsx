import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-2 px-4 py-4 lg:px-6 lg:py-8">
      <Link className="flex items-center gap-2" href="/">
        <span className="font-semibold">Mo</span>
      </Link>

      <nav className="flex gap-2 lg:gap-4">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/portfolio"
        >
          Portfolio
        </Link>
      </nav>
    </header>
  );
};

export default Header;
