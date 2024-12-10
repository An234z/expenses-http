import express from "express";
import fs from "fs/promises";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3005;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/add-expense", async (req, res) => {
  const expenseDataFromClient = req.body;  
  const newExpense = {
    ...expenseDataFromClient,
    id: (Math.round() * 1000).toString(),
  };

  try {
    const fileContent = await fs.readFile("./data/expenses.json", "utf-8");
    const expensesData = JSON.parse(fileContent);
    expensesData.push(newExpense);
    await fs.writeFile("./data/expenses.json", JSON.stringify(expensesData));
    res.status(201).json({ message: "Expense is added" });
  } catch (error) {
    console.error("Error saving expense:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
