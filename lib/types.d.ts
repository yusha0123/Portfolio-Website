export type FeaturedProjects = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
}[];

export type ArchiveProjects = {
  title: string;
  description: string;
  github: string;
  live?: string;
  stack: string[];
}[];
