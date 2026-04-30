import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/site";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="anchor-offset section-shell section-padding">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected case studies built to stop people in their tracks."
          description="Every project is presented as a rich, clickable case study with context, motion, craftsmanship, and business results. The cards below open dedicated project pages with the full story."
        />

        <Button asChild variant="secondary" className="mb-12 w-fit">
          <Link href="#contact">
            Need something equally ambitious?
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
