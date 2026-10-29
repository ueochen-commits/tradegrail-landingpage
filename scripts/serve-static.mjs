import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};
http
  .createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://127.0.0.1").pathname,
      );
      if (pathname.includes("..")) {
        res.writeHead(400);
        res.end();
        return;
      }
      let file = path.join(
        "dist",
        pathname === "/" ? "index.html" : pathname.slice(1),
      );
      try {
        if (!(await stat(file)).isFile()) throw 0;
      } catch {
        file += ".html";
      }
      let data;
      try {
        data = await readFile(file);
      } catch {
        res.statusCode = 404;
        file = "dist/404.html";
        data = await readFile(file);
      }
      res.setHeader(
        "Content-Type",
        types[path.extname(file)] || "application/octet-stream",
      );
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end("Static preview unavailable");
    }
  })
  .listen(3037, "127.0.0.1", () =>
    console.log("Built site: http://127.0.0.1:3037"),
  );
