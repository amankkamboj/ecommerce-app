import mongoose from "mongoose";

//Connect db
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Connect to Mongodb ${conn.connection.host}`.bgGreen.blue);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDb;
