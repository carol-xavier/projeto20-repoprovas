import dotenv from "dotenv";
dotenv.config();

import app from "./index.js";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
