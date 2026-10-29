import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};
for (const [port, directory] of [
  [4174, "Documentation/original-template/dist"],
  [4175, "dist"],
]) {
  const root = path.resolve(directory);
  http
    .createServer((req, res) => {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      const file = path.resolve(
        root,
        "." + (pathname === "/" ? "/index.html" : pathname),
      );
      if (
        !file.startsWith(root + path.sep) ||
        !fs.existsSync(file) ||
        !fs.statSync(file).isFile()
      ) {
        res.writeHead(404).end();
        return;
      }
      res.setHeader(
        "Content-Type",
        types[path.extname(file)] || "application/octet-stream",
      );
      fs.createReadStream(file).pipe(res);
    })
    .listen(port, "127.0.0.1", () =>
      console.log(`${directory}: http://127.0.0.1:${port}`),
    );
}
