export type ServiceAuthor = {
  _id: string;
  name: string;
};

export interface IService {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: ServiceAuthor;
  createdAt: string;
  updatedAt: string;
  availability: boolean;
}
