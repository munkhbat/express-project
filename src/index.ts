import dotenv from "dotenv";
import express from "express";
import http from "http";
import routes from "./routes";
import { connectionDb } from "./db";

dotenv.config();

const { PORT } = process.env;

const app = express();

// JSON body-г унших middleware-г заавал нэмнэ
app.use(express.json());

app.use(routes);

const server: http.Server = http.createServer(app);

connectionDb();

server.listen(PORT, async () => {
  console.log(`listening on port for ${PORT}`);
});
