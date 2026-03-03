import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import { ScrollProgress } from "@/components/scroll-progress";
import { TechStack } from "@/components/techstack";
import { getGithubRepos, type Repo } from "@/lib/github";

export default async function Home() {
  let repos: Repo[] = [];

  try {
    repos = await getGithubRepos("Sep-Vanced");
  } catch {
    repos = [];
  }

  return (
    <div className="dev-bg">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProjectsGrid repos={repos} />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}
