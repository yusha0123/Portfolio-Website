export type FeaturedProject = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
};

export type FeaturedProjects = FeaturedProject[];

export type ArchiveProjects = {
  title: string;
  description: string;
  github: string;
  live?: string;
  stack: string[];
}[];
