const express = require("express");
const bodyParser = express.json();
const cors = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");
const requestRouter = require("./routers/request");
const commentRouter = require("./routers/comment");
const pictureRouter = require("./routers/picture");
const userRouter = require("./routers/user");
const answerRouter = require("./routers/answer");
const favouriteRouter = require("./routers/favourite");
const app = express();

app.use(cors());
app.use(bodyParser);

app.get("/", (req, res) => {
  res.send("Hi from Express, this is the backend of Easy Coding!!!");
});

app.use("/", authRouter);

app.use("/post", postRouter);

app.use("/request", requestRouter);

app.use("/comment", commentRouter);

app.use("/answer", answerRouter);

app.use("/picture", pictureRouter);

app.use("/users", userRouter);

app.use("/favourite", favouriteRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
