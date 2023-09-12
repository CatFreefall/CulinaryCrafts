import express from "express";
import ratelimit from "express-rate-limit";
import cookieparser from "cookie-parser";

const app = express();
const port = 5000;

app.use("*", ratelimit());
app.use(express.json());
app.use(cookieparser());

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
