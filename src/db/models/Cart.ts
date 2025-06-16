import { DataType } from "./../../../node_modules/sequelize/types/data-types.d";
import { DataTypes, Model, Sequelize } from "sequelize";

class Cart extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
          type: DataTypes.UUID,
        },
      },
      { sequelize, timestamps: true, modelName: "cart" }
    );
  }
}

export default Cart;
