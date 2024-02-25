import mongoose from "mongoose";

const { Schema } = mongoose;

const obatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Obatype: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  anjuranPemakaian: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Obat || mongoose.model("Obat", obatSchema);
