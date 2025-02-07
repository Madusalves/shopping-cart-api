import express from "express";
import checkoutRoutes from "./routes/Checkout";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/checkout", checkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
