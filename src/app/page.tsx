import BlogShowcase from "@/components/Homepage/BlogShowcase";
import HeroSection from "@/components/Homepage/HeroSection";
import ProjectsShowcase from "@/components/Homepage/ProjectsShowcase";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <HeroSection />
      <BlogShowcase />
      <ProjectsShowcase />
      <Footer />
    </main>
  );
}
