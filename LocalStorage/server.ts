import * as express from "express";
import * as fs from "fs";
import * as https from 'https';

const app = express();
const options = {
  key:  fs.readFileSync('server_key.pem'),
  cert: fs.readFileSync('server_crt.pem'),
};

app.use(express.static('./'));

const server = https.createServer(options, app);
const portNumber: number = Number(process.argv[2]);

const isHttp: boolean = process.argv[3] === "http";

if (isHttp) {
  app.listen(portNumber, () =>
    process.stdout.write(`Open http://localhost:${portNumber}!\n`)
  );
} else {
  server.listen(portNumber, () =>
    process.stdout.write(`Open https://localhost:${portNumber}!\n`)
  );
}
