import { DataTypes, Model, Sequelize } from "sequelize";

class OrderItem extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          allowNull: false,
        },
        order_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        product_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
        },
        price: {
          type: DataTypes.FLOAT,
        },
      },
      { sequelize, modelName: "orderItem", timestamps: true }
    );
  }
}

export default OrderItem;
