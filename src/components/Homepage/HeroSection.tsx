import Link from "next/link";
import { Button } from "../ui/button";

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
        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hi, I&apos;m Mo Sabab
            </h1>
            <p className="max-w-md text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m a web developer. I love creating beautiful and functional
              websites and applications. I have a passion for learning, I want
              to share my journey with you in this blog.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant={"outline"}>
              <Link href="/blog">My Blog</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/projects">My Hobby Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
