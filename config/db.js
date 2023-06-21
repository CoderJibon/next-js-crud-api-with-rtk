import { MONGO_URL } from "@/ulitis/secret.js";
import mongoose from "mongoose";

const dataBaseConfig = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("dataBase connection established");
  } catch (error) {
    console.log(error.message);
  }
};

export default dataBaseConfig;
