import { createConnection } from "typeorm";
import app from "./app";

const port: Number = 3333;

try {
  createConnection()
    .then((connection) => {
      app.listen(port, () => {
        console.log(`> Running on port ${port}...`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
} catch (error) {
  console.log(error);
}
