export interface BookType {
  id?: number;
  name: string;
  originalName: string;
  author: string;
  genres: string;
  description: string;
  createdAt?: Date;
  firstEdition: Date | string;
  startReadDate: Date | string;
  endReadDate?: Date | string | null;
  photo: string;
  evaluation: number;
  numberOfPages: number;
  publishHouse: string;
}
