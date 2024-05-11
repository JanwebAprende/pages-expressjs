import express from "express";
import morgan from "morgan";
import ejs from "ejs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// importing Routes
import indexRoutes from "./routes/index.routes.js";
import aboutRoutes from "./routes/about.routes.js";

const app = express();

// settings
app.set("port", process.env.PORT || 5000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRoutes);
app.use("/about", aboutRoutes);

// static file
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
