import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    nama: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);
