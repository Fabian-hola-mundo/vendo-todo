export interface Product {
  catergory: string;
  id: number;
  title: string;
  description: string;
  price: number;
  image: string[] | string;
  place?: number;
  rating?: {
    rate?: number;
    count?: number;
  };
}
