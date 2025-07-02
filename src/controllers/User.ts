import { sign } from "crypto";
import { UserModel } from "../db";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { IUserLogin, IUserSignUp } from "../utils/interfaces/user";
import { generateToken } from "../utils/jwt";

export default class UserController {
  static async singUp(doc: IUserSignUp): Promise<string> {
    const { email, name, password } = doc;
    console.log(doc);

    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("this email was already existinsgng");
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await UserModel.create({
      email,
      name,
      password: hashedPassword,
    });

    const token = generateToken({ id: newUser.id, email: newUser.email });
    return token;
  }
  catch(error: any) {
    console.log("signup error", error);
    throw error;
  }

  static async login(doc: IUserLogin): Promise<string> {
    try {
      const { email, password } = doc;

      const user = await UserModel.findOne({ where: { email } });
      if (!user) {
        throw new Error("User not found");
      }

      // Нууц үгийг шалгах
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Incorrect password");
      }

      // Амжилттай нэвтэрсэн бол токен үүсгэх
      const token = generateToken({ id: user.id, email: user.email });
      return token;
    } catch (error: any) {
      console.log("login error", error);
      throw error;
    }
  }
}
