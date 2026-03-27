import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("tradegrail.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    name TEXT
  );

  CREATE TABLE IF NOT EXISTS trades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    symbol TEXT,
    direction TEXT,
    entry_price REAL,
    exit_price REAL,
    quantity REAL,
    entry_time DATETIME,
    exit_time DATETIME,
    pl REAL,
    strategy TEXT,
    notes TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Auth
  app.post("/api/auth/signup", async (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ error: "email, password and name are required" });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const stmt = db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)");
      const info = stmt.run(email, hashedPassword, name);
      res.json({ id: info.lastInsertRowid, email, name });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "email and password are required" });
    }
    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email) as any;
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isHashed = user.password.startsWith("$2b$") || user.password.startsWith("$2a$");
    let match = false;

    if (isHashed) {
      match = await bcrypt.compare(password, user.password);
    } else {
      // 旧明文密码：验证通过后自动升级为 hash
      match = user.password === password;
      if (match) {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        db.prepare("UPDATE users SET password = ? WHERE id = ?").run(hashedPassword, user.id);
      }
    }

    if (match) {
      res.json({ id: user.id, email: user.email, name: user.name });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Trades API
  app.get("/api/trades", (req, res) => {
    const userId = req.query.userId;
    if (!userId) return res.status(400).json({ error: "userId required" });
    const trades = db.prepare("SELECT * FROM trades WHERE user_id = ? ORDER BY entry_time DESC").all(userId);
    res.json(trades);
  });

  app.post("/api/trades", (req, res) => {
    const { user_id, symbol, direction, entry_price, exit_price, quantity, entry_time, exit_time, pl, strategy, notes } = req.body;
    try {
      const stmt = db.prepare(`
        INSERT INTO trades (user_id, symbol, direction, entry_price, exit_price, quantity, entry_time, exit_time, pl, strategy, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      const info = stmt.run(user_id, symbol, direction, entry_price, exit_price, quantity, entry_time, exit_time, pl, strategy, notes);
      res.json({ id: info.lastInsertRowid });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
