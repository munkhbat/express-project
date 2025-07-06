import dotenv from "dotenv";
import express from "express";
import http from "http";
import routes from "./routes";
import { connectionDb } from "./db";
import path from "path";

dotenv.config();

const { PORT } = process.env;

const app = express();

// JSON body-г унших middleware-г заавал нэмнэ
app.use(express.json());

app.use(routes);

const server: http.Server = http.createServer(app);

connectionDb();

i18n.configure({
  locales: ["mn", "en"],
  defaultLocale: "mn",
  directory: path.join(__dirname, "/locales"),
  updateFiles: false,
  objectNotation: true,
});

server.listen(PORT, async () => {
  console.log(`listening on port for ${PORT}`);
});
