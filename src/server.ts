import express from "express";
import checkoutRoutes from "./routes/Checkout.js";
import swaggerDocs from "../swaggerConfig.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/checkout", checkoutRoutes);

// Inicializa o Swagger
swaggerDocs(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
