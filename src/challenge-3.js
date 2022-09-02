// 라우터(router) 3개를 만드세요: globalRouter, storyRouter, userRouter
// 라우터 안에 다음과 같은 GET라우트(route)를 만드세요.
// /
// /trending
// /new
// /join
// /login

// /users
// /users/:id
// /users/edit-profile

// /stories/:id
// /stories/:id/edit
// /stories/:id/delete
// 위 라우트를 globalRouter, storyRouter, userRouter에 분배하세요. 반드시 모든 라우트마다 컨트롤러가 있어야 합니다.

import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import storyRouter from "./routers/storyRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
// Codesanbox does not need PORT :)

app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
