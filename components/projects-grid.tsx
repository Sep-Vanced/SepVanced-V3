"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, Funnel } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Repo } from "@/lib/github";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectsGridProps = {
  repos: Repo[];
  maxItems?: number;
  showViewMore?: boolean;
  title?: string;
  sectionId?: string;
  showFrameworkFilters?: boolean;
};

const demoLinks: Record<string, string> = {
  studyplanner: "https://study-planner-ivory-pi.vercel.app",
  insightflow: "https://insight-flow-nine.vercel.app/",
  weatherapp: "https://weather-app-vert-eight-68.vercel.app/",
  qrcodereader: "https://qr-code-reader-hazel.vercel.app/",
  typingspeedtester: "https://typing-speed-tester-six-mu.vercel.app/",
  medcount: "https://med-count.vercel.app/",
  sepvanced: "https://sep-vanced.github.io/Sep-Vanced/",
  sepvancedv2: "https://sep-vanced-v2.vercel.app/",
  sepvancedv3: "https://sep-vanced-v3.vercel.app/",
  researchrepositorysystem: "https://research-repository-system.vercel.app/",
  advanceprojectflow: "https://advance-project-flow.vercel.app/",
};

const githubLinks: Record<string, string> = {
  sepvanced: "https://github.com/Sep-Vanced/Sep-Vanced.git",
};

const projectDescriptions: Record<string, string> = {
  sepvanced: "SepVanced Web Portfolio V1",
};

const hiddenProjects = new Set(["pgoto"]);

const languageOrder = [
  "TypeScript",
  "JavaScript",
  "PHP",
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "Unknown",
];

function normalizeProjectName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function repoNameToVercelSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getDemoUrl(repoName: string) {
  const mappedDemoUrl = demoLinks[normalizeProjectName(repoName)];
  if (mappedDemoUrl) {
    return mappedDemoUrl;
  }

  const vercelSlug = repoNameToVercelSlug(repoName);
  if (!vercelSlug) {
    return undefined;
  }

  return `https://${vercelSlug}.vercel.app/`;
}

function getGithubUrl(repoName: string, fallbackUrl: string) {
  return githubLinks[normalizeProjectName(repoName)] ?? fallbackUrl;
}

function getDescription(repoName: string, fallbackDescription: string | null) {
  return (
    projectDescriptions[normalizeProjectName(repoName)] ??
    fallbackDescription ??
    "No description provided."
  );
}

function getRepoLanguages(repo: Repo) {
  return [repo.language?.trim() || "Unknown"];
}

export function ProjectsGrid({
  repos,
  maxItems,
  showViewMore = false,
  title = "<Projects />",
  sectionId = "projects",
  showFrameworkFilters = false,
}: ProjectsGridProps) {
  const visibleRepos = repos
    .filter((repo) => !hiddenProjects.has(normalizeProjectName(repo.name)))
    .filter((repo, index, allRepos) => {
      const normalized = normalizeProjectName(repo.name);
      return index === allRepos.findIndex((item) => normalizeProjectName(item.name) === normalized);
    });
  const reposWithFrameworks = useMemo(
    () => visibleRepos.map((repo) => ({ repo, frameworks: getRepoLanguages(repo) })),
    [visibleRepos],
  );
  const frameworkFilters = useMemo(() => {
    const uniqueFrameworks = new Set<string>();
    reposWithFrameworks.forEach(({ frameworks }) => {
      frameworks.forEach((framework) => uniqueFrameworks.add(framework));
    });

    const sorted = Array.from(uniqueFrameworks).sort((a, b) => {
      const indexA = languageOrder.indexOf(a);
      const indexB = languageOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) return a.localeCompare(b);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

    return ["All", ...sorted];
  }, [reposWithFrameworks]);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredRepos =
    !showFrameworkFilters || activeFilter === "All"
      ? visibleRepos
      : reposWithFrameworks
          .filter(({ frameworks }) => frameworks.includes(activeFilter))
          .map(({ repo }) => repo);

  const displayedRepos = typeof maxItems === "number" ? filteredRepos.slice(0, maxItems) : filteredRepos;

  return (
    <section id={sectionId} className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-5 font-mono text-xl font-semibold text-accent sm:mb-7 sm:text-3xl"
      >
        {title}
      </motion.h2>

      {showFrameworkFilters && frameworkFilters.length > 1 ? (
        <div className="scrollbar-terminal mb-5 flex snap-x snap-mandatory items-center gap-2 overflow-x-auto rounded-xl border border-border/70 bg-card/65 p-2 sm:mb-6 sm:justify-center">
          <span
            aria-hidden
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/55 text-muted-foreground"
          >
            <Funnel className="h-4 w-4" />
          </span>
          {frameworkFilters.map((framework) => {
            const isActive = activeFilter === framework;
            return (
              <button
                key={framework}
                type="button"
                onClick={() => setActiveFilter(framework)}
                className={`shrink-0 snap-start rounded-lg border px-3.5 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                  isActive
                    ? "border-[var(--accent)] bg-accent text-[#eef3ff]"
                    : "border-border/70 bg-background/50 text-foreground/85 hover:border-accent/45 hover:text-accent"
                }`}
              >
                {framework}
              </button>
            );
          })}
        </div>
      ) : null}

      {visibleRepos.length === 0 ? (
        <Card className="border-border/70 bg-card/60">
          <CardContent className="pt-1 text-sm text-muted-foreground">
            Unable to load repositories right now. Please try again later.
          </CardContent>
        </Card>
      ) : displayedRepos.length === 0 ? (
        <Card className="border-border/70 bg-card/60">
          <CardContent className="pt-1 text-sm text-muted-foreground">
            No projects found for this framework yet.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {displayedRepos.map((repo, index) => (
            <motion.article
              key={repo.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -3 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {(() => {
                const demoUrl = getDemoUrl(repo.name);
                const githubUrl = getGithubUrl(repo.name, repo.htmlUrl);
                return (
              <Card className="card-glow h-full justify-between rounded-2xl border-border/70 bg-card/75 transition">
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-base text-foreground sm:text-lg">{repo.name}</CardTitle>
                  <CardDescription className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
                    {getDescription(repo.name, repo.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-1">
                  <div className="flex items-center gap-4 text-xs text-foreground/85">
                    <span>{repo.language ?? "Unknown"}</span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazersCount}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:flex sm:items-center">
                    <Button asChild size="sm" variant="outline" className="w-full sm:w-auto">
                      <a
                        href={demoUrl ?? repo.htmlUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="w-full sm:w-auto">
                      <a href={githubUrl} target="_blank" rel="noreferrer">
                        GitHub <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
                );
              })()}
            </motion.article>
          ))}
        </div>
      )}

      {showViewMore && filteredRepos.length > (maxItems ?? 0) ? (
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View More Projects</Link>
          </Button>
        </div>
      ) : null}
    </section>
  );
}
