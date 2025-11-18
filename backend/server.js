const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ClickHouse } = require("clickhouse");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://rimshamukhtiar2003_db_user:gQ0IUeJgGDoWUWif@cluster1.daue2kh.mongodb.net/min-analytics?appName=Cluster1");

const User = require("./models/User");


const clickhouse = new ClickHouse({
    url: "http://localhost",
    port: 8123,
    debug: false,
});
const bcrypt = require("bcrypt");

// SIGNUP

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hash });
  await newUser.save();
  res.json({ message: "Signup success" });
});

const jwt = require("jsonwebtoken");

// SECRET KEY
const JWT_SECRET = "your-secret-key";

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login success", token });
});
// GET 100 rows from clickhouse
app.get("/sales", async (req, res) => {
    const rows = await clickhouse.query("SELECT * FROM sales LIMIT 100").toPromise();
    res.json(rows);
});

// GET chart data
app.get("/chart-data", async (req, res) => {
    const rows = await clickhouse.query("SELECT day, amount FROM sales_chart").toPromise();
    res.json(rows);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
