import { DataTypes, Model, Sequelize } from "sequelize";

class Payment extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        order_id: {
          type: DataTypes.UUID,
        },
        payment_method: {
          type: DataTypes.STRING,
        },
        payment_status: {
          type: DataTypes.STRING,
        },
        amount: {
          type: DataTypes.STRING,
        },
        transaction_id: {
          type: DataTypes.UUID,
        },
      },
      { sequelize, modelName: "payment", timestamps: true }
    );
  }
}

export default Payment;
