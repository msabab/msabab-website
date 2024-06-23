import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/blog">Blog</Link>
              </BreadcrumbItem>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Post</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      {children}
    </section>
  );
}
