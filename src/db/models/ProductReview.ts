import { DataTypes, Model, Sequelize } from "sequelize";

class ProductReview extends Model {
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
        product_id: {
          type: DataTypes.UUID,
        },
        rating: {
          type: DataTypes.INTEGER,
        },
        comment: {
          type: DataTypes.TEXT,
        },
      },
      { sequelize, modelName: "product_review", timestamps: true }
    );
  }
}

export default ProductReview;
