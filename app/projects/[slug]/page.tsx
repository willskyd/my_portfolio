import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Link2 } from "lucide-react";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";
import { ProjectPageHeader } from "@/components/project-page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.description,
    alternates: {
      canonical: absoluteUrl(`/projects/${project.slug}`),
    },
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.description,
      url: absoluteUrl(`/projects/${project.slug}`),
      images: [
        {
          url: project.image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const moreProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <ProjectPageHeader />
      <main className="pb-20 pt-8">
        <section className="section-shell">
          <div className="overflow-hidden rounded-[2.4rem] border border-border/70 bg-background/58 shadow-[0_28px_110px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
            <div className="relative h-[34rem] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="border-white/18 bg-black/28 text-white backdrop-blur-lg">
                    {project.category}
                  </Badge>
                  <span className="rounded-full border border-white/16 bg-black/24 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur-lg">
                    {project.year}
                  </span>
                </div>

                <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-white md:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/78 md:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <div className="glass-panel rounded-[2rem] border border-border/70 p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Overview</p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {project.solution}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <article className="glass-panel rounded-[2rem] border border-border/70 p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">Problem</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.problem}
                  </p>
                </article>

                <article className="glass-panel rounded-[2rem] border border-border/70 p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary">Approach</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.solution}
                  </p>
                </article>
              </div>

              <div className="glass-panel rounded-[2rem] border border-border/70 p-7 md:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Results</p>
                <div className="mt-5 space-y-4">
                  {project.results.map((result) => (
                    <div key={result} className="flex gap-3 text-sm text-foreground/84 md:text-base">
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-primary shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
                      <p className="leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {project.gallery.map((image, index) => (
                  <div
                    key={`${project.slug}-${index + 1}`}
                    className="glass-panel overflow-hidden rounded-[1.8rem] border border-border/70"
                  >
                    <div className="relative h-64">
                      <Image
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <div className="glass-panel rounded-[2rem] border border-border/70 p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Project Metrics</p>
                <div className="mt-5 grid gap-4">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.6rem] border border-border/70 bg-background/55 p-5"
                    >
                      <p className="font-display text-4xl font-semibold">{metric.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] border border-border/70 p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Technology</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/72"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] border border-border/70 p-7">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">Links</p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button asChild size="lg">
                    <Link href={project.viewsite} target="_blank" rel="noreferrer">
                      View site
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="secondary" size="lg">
                    {/* <Link href={project.repository} target="_blank" rel="noreferrer">
                      View Repository
                      <Github className="size-4" />
                    </Link> */}
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-14 rounded-[2.3rem] border border-border/70 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(216,197,140,0.12))] p-7 md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">More Work</p>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl">
                  Explore more case studies or move straight into a conversation.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  The rest of the portfolio expands on the same approach: strategic storytelling,
                  premium visual execution, and frontend systems built to hold up in production.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/">
                    Browse Portfolio
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Start a Project
                    <Link2 className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {moreProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="rounded-full border border-border/70 bg-background/58 px-4 py-2 text-sm text-foreground/78 transition hover:border-primary/35 hover:bg-primary/8 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
