import { DataTypes, Model, Sequelize } from "sequelize";

class User extends Model {
  public id!: string;
  public email!: string;
  public password!: string;

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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { sequelize, modelName: "user", timestamps: true }
    );
  }
}

export default User;
