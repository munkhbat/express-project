export interface IAddress {
  id?: string;
  address_line?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  phone_number?: string;
}

export interface IAddressValid extends IAddress {
  id?: string;
}
