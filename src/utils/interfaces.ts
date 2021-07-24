export interface SearchResponse {
  data: SearchData;
}

export interface SearchData {
  totalCount: number;
  articles: Article[];
}

export interface Article {
  id: string;
  title: string;
  endDate: string;
  imageUrl: string;
  buyNowPrice: number;
}

export interface ArticleDetails {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  descriptionHtml: string;
  imageUrl: string;
  sellerId: string;
}

export interface ArticleResponse {
  data: ArticleDetails;
}

export interface User {
  id: string;
  name: string;
}

export interface GetUserResponse {
  data: User;
}
