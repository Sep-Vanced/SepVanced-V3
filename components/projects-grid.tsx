"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Repo } from "@/lib/github";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectsGridProps = {
  repos: Repo[];
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
};

const githubLinks: Record<string, string> = {
  sepvanced: "https://github.com/Sep-Vanced/Sep-Vanced.git",
};

const projectDescriptions: Record<string, string> = {
  sepvanced: "SepVanced Web Portfolio V1",
};

const hiddenProjects = new Set(["pgoto"]);

function normalizeProjectName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getDemoUrl(repoName: string) {
  return demoLinks[normalizeProjectName(repoName)];
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

export function ProjectsGrid({ repos }: ProjectsGridProps) {
  const visibleRepos = repos
    .filter((repo) => !hiddenProjects.has(normalizeProjectName(repo.name)))
    .filter((repo, index, allRepos) => {
      const normalized = normalizeProjectName(repo.name);
      return index === allRepos.findIndex((item) => normalizeProjectName(item.name) === normalized);
    });

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-7 font-mono text-2xl font-semibold text-accent sm:text-3xl"
      >
        {"<Projects />"}
      </motion.h2>

      {visibleRepos.length === 0 ? (
        <Card className="border-border/70 bg-card/60">
          <CardContent className="pt-1 text-sm text-muted-foreground">
            Unable to load repositories right now. Please try again later.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleRepos.map((repo, index) => (
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
              <Card className="card-glow h-full justify-between border-border/70 bg-card/75 transition">
                <CardHeader>
                  <CardTitle className="line-clamp-1 text-lg text-foreground">{repo.name}</CardTitle>
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
    </section>
  );
}
