import { DataTypes, Model, Sequelize } from "sequelize";

class Address extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        address_line: {
          type: DataTypes.STRING,
        },
        city: {
          type: DataTypes.STRING,
        },
        state: {
          type: DataTypes.STRING,
        },
        postal_code: {
          type: DataTypes.STRING,
        },
        country: {
          type: DataTypes.STRING,
        },
        phone_number: {
          type: DataTypes.STRING,
        },
      },
      { sequelize, modelName: "address", timestamps: true }
    );
  }
}

export default Address;
