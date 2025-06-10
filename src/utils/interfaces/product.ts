export interface ICreateProduct {
  name: string;
  barcode: string;
  price: string;
  productType: string;
  created_user_id: string;
  updated_user_id: string;
}

export interface ProductAttributes {
  id: number;
  name: string;
  barcode: string;
  price: string;
  productType: string;
  created_user_id: string;
  updated_user_id: string;
}
