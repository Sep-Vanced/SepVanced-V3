export type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazersCount: number;
  htmlUrl: string;
  updatedAt: string;
  fork: boolean;
};

type GithubRepoResponse = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
  fork: boolean;
};

export async function getGithubRepos(username: string): Promise<Repo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos = (await response.json()) as GithubRepoResponse[];

  return repos
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stargazersCount: repo.stargazers_count,
      htmlUrl: repo.html_url,
      updatedAt: repo.updated_at,
      fork: repo.fork,
    }))
    .sort((a, b) => {
      if (b.stargazersCount !== a.stargazersCount) {
        return b.stargazersCount - a.stargazersCount;
      }
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
}
