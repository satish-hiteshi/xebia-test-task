export interface ProductType {
    id: string;
    name: string;
    description: string;
    image: string;
    price: PriceType;
  }
  
  export interface PriceType {
    amount: string;
    currency: string;
  }
  