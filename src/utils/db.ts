import mongoose from "mongoose";

let uri =
  "mongodb+srv://naufalnr:kcQQbd5tMTrrQFue@cluster0.nwavamo.mongodb.net/LansiCare?retryWrites=true&w=majority";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(uri);
    console.log("Mongoose Connected");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
