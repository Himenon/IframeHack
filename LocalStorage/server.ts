import * as express from "express";
import * as fs from "fs";
import * as url from "url";
import * as path from "path";

const app = express();
const cache: { [name: string]: undefined | string } = {};

// TODO Error処理
app.get(
  "/*",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { pathname } = url.parse(req.url);
    if (!pathname) {
      res.send("該当パスは存在しません");
      res.end();
      return;
    }
    if (!cache[pathname]) {
      const filepath =
        pathname === "/"
          ? path.join(__dirname, "index.html")
          : path.join(__dirname, pathname);
      if (fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
        cache[pathname] = fs.readFileSync(filepath, { encoding: "utf8" });
      } else {
        res.send("該当パスは存在しません");
        res.end();
        return;
      }
    }
    res.send(cache[pathname]);
    cache[pathname] = undefined; // キャッシュさせないとき
    res.end();
  }
);

const portNumber: number = Number(process.argv[2]);

app.listen(portNumber, () =>
  process.stdout.write(`Example app listening on port ${portNumber}!\n`)
);
