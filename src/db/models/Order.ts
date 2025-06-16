import { DataTypes, Model, Sequelize } from "sequelize";

class Order extends Model {
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
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        payment_method: {
          type: DataTypes.STRING,
        },
        total_price: {
          type: DataTypes.FLOAT,
        },
      },
      { sequelize, modelName: "order", timestamps: true }
    );
  }
}

export default Order;
