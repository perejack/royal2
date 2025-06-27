export interface ProductVariant {
  name: string;
  price: string;
}

export interface ProductSpecifications {
  gaugeOptions?: string[];
  finishOptions?: string[];
  colors?: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features?: string[];
  priceVariants?: ProductVariant[];
  availableColors?: string;
  specifications?: ProductSpecifications;
}