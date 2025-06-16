import { DataType } from "./../../../node_modules/sequelize/types/data-types.d";
import { DataTypes, Model, Sequelize } from "sequelize";

class CartItem extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        cart_id: {
          type: DataTypes.UUID,
        },
        product_id: {
          type: DataTypes.UUID,
        },
        quantity: {
          type: DataTypes.INTEGER,
        },
      },
      { sequelize, modelName: "cart_item", timestamps: true }
    );
  }
}

export default CartItem;
