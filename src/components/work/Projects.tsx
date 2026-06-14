"use client";

import { Column, Heading, Button } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface Project {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    images: string[];
    team?: Array<{
      name: string;
      role: string;
      avatar: string;
      linkedIn: string;
    }>;
    link?: string;
  };
  content: string;
}

interface ProjectsProps {
  range?: [number, number?];
  projects?: Project[];
}

export function Projects({ range, projects = [] }: ProjectsProps) {
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column>
      <Heading as="h1" variant="heading-strong-xl">
        🚀 Featured Projects
      </Heading>

      <Column fillWidth gap="xl" marginBottom="40" paddingX="xl">
        {displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
          />
        ))}
      </Column>

      <Button
        onClick={() => window.open("https://www.linkedin.com/in/gyanankur-baruah-797205338", "_blank")}
        variant="primary">
        Connect on LinkedIn 🔗
      </Button>
    </Column>
  );
}
