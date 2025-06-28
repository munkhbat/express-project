import { DataTypes, Model, Sequelize } from "sequelize";

class Category extends Model {
  id: any;
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
        },
      },
      { timestamps: true, modelName: "category", sequelize }
    );
  }
}

export default Category;
