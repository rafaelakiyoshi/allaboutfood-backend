import mongoose from "mongoose";

const url = `mongodb+srv://rafael:31avUVms9qP8rxc6@akiyoshi.jztaa.mongodb.net/allaboutfood?retryWrites=true&w=majority`;
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
