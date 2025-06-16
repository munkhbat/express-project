import { error } from "console";
import dotenv from "dotenv";
import { Options, Sequelize } from "sequelize";
import User from "./models/User";
import Product from "./models/Product";
import ProductReview from "./models/ProductReview";
import Order from "./models/Order";
import OrderItem from "./models/OrderItem";
import Address from "./models/Address";
import Cart from "./models/Cart";
import CartItem from "./models/CartItem";
import Category from "./models/Categories";
import Payment from "./models/Payments";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(<Options>{
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: "postgres",
  database: DB_NAME,
  logging: false,
});

let models = [
  User,
  Product,
  ProductReview,
  Order,
  OrderItem,
  Address,
  Cart,
  CartItem,
  Category,
  Payment,
];

models.forEach((model) => model.initialize(sequelize));

const connectionDb = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected successfully"); // ✅ Амжилттай холбогдсон лог

    await sequelize.sync({ alter: true, force: false });
    console.log("✅ DB sync complete"); // ✅ Sync хийгдсэнийг логлох
  } catch (err: any) {
    console.log("❌ DB connection error:", err.message);
  }
};

export {
  connectionDb,
  sequelize as Database,
  User as UserModel,
  Product as ProductModel,
  ProductReview as ProductReviewModel,
  Cart as CartModel,
  CartItem as CartItemModel,
  Category as CategoryModel,
  Order as OrderModel,
  OrderItem as OrderItemModel,
  Address as AddressModel,
  Payment as PaymentModel,
};
