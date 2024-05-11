import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log(`mongoDB connected successfully`))
    .catch((error) => console.log(`error` + error));
};

export { connectMongo };
