export type Country = {
  name: string;
  iso: string;
  flag: string;
};

export type Category = {
  name: string;
};

export type News = {
  source?: {
    id?: string;
    name?: string;
  };
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
};
