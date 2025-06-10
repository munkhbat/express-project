import { DataTypes, Model, Sequelize } from "sequelize";

class Product extends Model {
  public barcode!: string;
  public id!: string;
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        productType: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.STRING,
        },
        barcode: {
          type: DataTypes.STRING,
        },
        created_user_id: {
          type: DataTypes.UUID,
          defaultValue: null,
          allowNull: true,
        },
        updated_user_id: {
          type: DataTypes.UUID,
          defaultValue: null,
          allowNull: true,
        },
      },
      { sequelize, modelName: "product", timestamps: true }
    );
  }
}
export default Product;
