import { AddressModel } from "../db";
import { IAddress, IAddressValid } from "../utils/interfaces/address";
import { isEmpty } from "lodash";

export default class Address {
  static async valid(doc: IAddressValid): Promise<IAddress> {
    const { address_line, city, state, postal_code, country, phone_number } =
      doc;

    if (isEmpty(address_line)) {
      throw new Error("error.validation.address_line.required");
    }
    if (isEmpty(city)) {
      throw new Error("error.validation.city.required");
    }
    if (isEmpty(state)) {
      throw new Error("error.validation.state.required");
    }

    if (isEmpty(country)) {
      throw new Error("error.validation.country.required");
    }

    return {
      address_line,
      city,
      state,
      postal_code,
      country,
      phone_number,
    };
  }
}
