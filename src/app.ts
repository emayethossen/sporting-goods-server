import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/products.route";
import { UserRoutes } from "./app/modules/user/user.route";
import { BlogRoutes } from "./app/modules/blog/blog.route";
import { PaymentRoutes } from "./app/modules/payments/payment.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api", ProductRoutes);
app.use("/api", UserRoutes);
app.use("/api", BlogRoutes);
app.use("/api", PaymentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
