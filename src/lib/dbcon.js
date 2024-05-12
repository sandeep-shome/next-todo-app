import mongoose from "mongoose";
const dbcon = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const connection = await mongoose.connection;
    connection.on("connected", () => {
      console.log("db connection established!");
    });
    connection.on("error", () => {
      console.log("db connection error!");
      process.exit();
    });
  } catch (error) {
    console.log(error.messege);
  }
};

export default dbcon;
