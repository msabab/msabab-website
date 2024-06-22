import Link from "next/link";

const BlogShowcase = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            My Latest Blog Posts
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Read my thoughts on web development, technology, and more.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <Link className="font-semibold" href="#">
              Title of Blog Post Goes Here
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Excerpt of the blog post goes here. It can be a bit longer to give
              readers an idea of what the blog post is about.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="font-semibold" href="#">
              Title of Blog Post Goes Here
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Excerpt of the blog post goes here. It can be a bit longer to give
              readers an idea of what the blog post is about.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="font-semibold" href="#">
              Title of Blog Post Goes Here
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Excerpt of the blog post goes here. It can be a bit longer to give
              readers an idea of what the blog post is about.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Link className="font-semibold" href="#">
              Title of Blog Post Goes Here
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Excerpt of the blog post goes here. It can be a bit longer to give
              readers an idea of what the blog post is about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
