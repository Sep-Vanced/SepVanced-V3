"use client";

import { motion } from "framer-motion";

type StackItem = {
  name: string;
  logoSrc: string;
};

type StackGroup = {
  title: string;
  items: StackItem[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", logoSrc: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logoSrc: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "Tailwind CSS", logoSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Shadcn", logoSrc: "https://cdn.simpleicons.org/shadcnui/ffffff" },
      { name: "JavaScript", logoSrc: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", logoSrc: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "React JS", logoSrc: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next JS", logoSrc: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "Vue.js", logoSrc: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      { name: "Flutter", logoSrc: "https://cdn.simpleicons.org/flutter/02569B" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node JS", logoSrc: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "PHP", logoSrc: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Laravel", logoSrc: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Express.js", logoSrc: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "Convex", logoSrc: "https://cdn.simpleicons.org/convex/EE342F" },
      { name: "Supabase", logoSrc: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "Firebase", logoSrc: "https://cdn.simpleicons.org/firebase/DD2C00" },
      { name: "Docker", logoSrc: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "API Development", logoSrc: "https://cdn.simpleicons.org/swagger/85EA2D" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", logoSrc: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", logoSrc: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", logoSrc: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "PhpMyAdmin", logoSrc: "https://cdn.simpleicons.org/phpmyadmin/6C78AF" },
      { name: "SQL Server", logoSrc: "https://cdn.simpleicons.org/microsoftsqlserver/CC2927" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Python", logoSrc: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "WordPress", logoSrc: "https://cdn.simpleicons.org/wordpress/21759B" },
      { name: "DigitalOcean", logoSrc: "https://cdn.simpleicons.org/digitalocean/0080FF" },
      { name: "Java", logoSrc: "https://cdn.simpleicons.org/openjdk/ffffff" },
      { name: "C++", logoSrc: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="techstack" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-5 font-mono text-xl font-semibold text-accent sm:mb-7 sm:text-3xl"
      >
        {"< Technical Stacks/>"}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border/70 bg-card/70 p-3 shadow-[0_8px_28px_rgba(9,21,58,0.2)] backdrop-blur-sm sm:rounded-3xl sm:p-6"
      >
        <div className="space-y-4 sm:space-y-6">
          {stackGroups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="mb-2 font-mono text-base font-semibold text-accent sm:mb-3 sm:text-lg">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${group.title}-${item.name}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.25, delay: groupIndex * 0.05 + itemIndex * 0.02 }}
                    className="card-glow flex min-h-14 items-center gap-2 rounded-lg border border-border/70 bg-background/55 px-2.5 py-2.5 transition hover:border-accent/45 hover:bg-accent/10 sm:min-h-16 sm:gap-3 sm:rounded-xl sm:px-3 sm:py-3"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/70 bg-card/85 p-1 sm:h-7 sm:w-7">
                      <img
                        src={item.logoSrc}
                        alt={`${item.name} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.src = "/file.svg";
                        }}
                      />
                    </span>
                    <span className="text-sm font-semibold leading-tight text-foreground/90 sm:text-base lg:text-lg">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
