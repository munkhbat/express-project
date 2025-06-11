import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
const JWT_SECRET = process.env.JWT_SECRET;
dotenv.config();
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export const generateToken = (
  payload: object,
  expiresIn: string | number = "7d"
): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn as any });
};

export const verifyToken = (token: string): JwtPayload | string => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    throw new Error("token хучингүй байна");
  }
};
