import BlogShowcase from "@/components/Homepage/BlogShowcase";
import HeroSection from "@/components/Homepage/HeroSection";
import ProjectsShowcase from "@/components/Homepage/ProjectsShowcase";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <BlogShowcase />
        <ProjectsShowcase />
        <Footer />
      </main>
    </>
  );
}
