import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import { ScrollProgress } from "@/components/scroll-progress";
import { TechStack } from "@/components/techstack";
import { getGithubRepos, type Repo } from "@/lib/github";
import { Experience } from "@/components/experience";

export default async function Home() {
  let repos: Repo[] = [];

  try {
    repos = await getGithubRepos("Sep-Vanced");
  } catch {
    repos = [];
  }

  return (
    <div className="dev-bg flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsGrid repos={repos} maxItems={3} showViewMore />
        <TechStack />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
