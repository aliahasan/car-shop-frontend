export type Author = {
  _id: string;
  name: string;
};

export type TService = {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
};
