// URL Logger: 이 미들웨어는 방문 중인 URL을 기록(log) 해야 합니다.
// Time Logger: 이 미들웨어는 요청(request)의 년, 월, 일을 기록해야 합니다.
// Security Logger: 이 미들웨어는 프로토콜이 https이면 secure이라고 기록하고, 그 외의 경우 insecure라고 기록해야 합니다.
// Protector Middleware: 이 미들웨어는 사용자가 /protected로 이동하려고 할 경우 이동하지 못하도록 해야 합니다.

import express from "express";
const { Temporal } = require("proposal-temporal");

const PORT = 4000;

const app = express();

const myDate = new Date();
const yyyy = myDate.getFullYear();
const mm = myDate.getMonth() + 1;
const dd = myDate.getDate();

const date = Temporal.PlainDate.from({ year: yyyy, month: mm, day: dd });
date.year; // => 2006
date.inLeapYear; // => false
date.toString(); // => '2006-08-24'

const handleListing = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

const urlLogger = (req, res, next) => {
  console.log(req.protocol + "://" + req.get("host") + req.originalUrl);
  next();
};
const timeLogger = (req, res, next) => {
  console.log(date);
  next();
};
const securityLogger = (req, res, next) => {
  if (req.protocol == `https`) {
    console.log("secure");
  } else console.log("insecure");
  next();
};
const protectorMiddleware = (req, res, next) => {
  if (req.url === "/protected") {
    return res.send("Not Allow");
  } else next();
};

const home = (req, res, next) => {
  return res.send("HOME");
};

const login = (req, res, next) => {
  return res.send("LOGIN");
};

const pageProtected = (req, res, next) => {
  return res.send("PROTECTED");
};

app.listen(PORT, handleListing);

app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);

app.get("/", home);

app.get("/login", login);

app.get("/protected", pageProtected);
