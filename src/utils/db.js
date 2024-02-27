import mongoose from "mongoose";

let uri = process.env.MONGODB_URI;

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoo se Connect");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
