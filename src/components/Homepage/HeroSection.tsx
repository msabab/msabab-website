import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 border-t border-b">
      <div className="container grid gap-6 px-4 text-center md:px-6 lg:gap-10 lg:grid-cols-3 lg:text-left">
        <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 lg:order-last">
          <img
            alt="Avatar"
            className="rounded-full overflow-hidden aspect-square object-cover object-center"
            height="200"
            src="/placeholder.svg"
            width="200"
          />
        </div>
        <div className="space-y-2 lg:col-span-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hi, I&apos;m Mo Sabab
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m a web developer based in New York. I love creating
              beautiful and functional websites.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Me
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              My Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
