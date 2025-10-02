export type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  tags?: string[];
  externalLink?: string; // Optional external link to the blog post on another website
  // rest
  [key: string]: any;
};
