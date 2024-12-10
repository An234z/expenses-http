import express from "express";
import fs from "fs/promises";
import path from "path";
import cors from "cors";

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.get("/expenses", async (req, res) => {
  try {
    const fileContent = await fs.readFile(path.join(__dirname, "data", "expenses.json"), "utf8");
    const expensesData = JSON.parse(fileContent);
    res.status(200).json({ expenses: expensesData });
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
