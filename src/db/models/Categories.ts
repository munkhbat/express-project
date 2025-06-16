import { DataTypes, Model, Sequelize } from "sequelize";

class Category extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
        },
        name: {
          type: DataTypes.UUID,
        },
      },
      { timestamps: true, modelName: "category", sequelize }
    );
  }
}

export default Category;
