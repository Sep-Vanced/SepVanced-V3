import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectsGrid } from "@/components/projects-grid";
import { getGithubRepos, type Repo } from "@/lib/github";

export default async function ProjectsPage() {
  let repos: Repo[] = [];

  try {
    repos = await getGithubRepos("Sep-Vanced");
  } catch {
    repos = [];
  }

  return (
    <div className="dev-bg flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ProjectsGrid repos={repos} title="<All Projects />" sectionId="all-projects" showFrameworkFilters />
      </main>
      <Footer />
    </div>
  );
}
