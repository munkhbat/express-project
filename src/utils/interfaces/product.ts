export interface ICreateProduct {
  name: string;
  barcode: string;
  price: string;
  stock: string;
  category_id: string;
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

export interface IDeleteProducts {
  id: any;
  ids: string[];
}

export interface IUpdateProduct extends ICreateProduct {
  id: string;
}
