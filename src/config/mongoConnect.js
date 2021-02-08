import mongoose from "mongoose";

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const url = `mongodb+srv://rafael:${password}@${username}.jztaa.mongodb.net/${host}?retryWrites=true&w=majority`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
export const connect = () => {
  return mongoose
    .connect(url, dbOptions)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Databased failed: ", error));
};
