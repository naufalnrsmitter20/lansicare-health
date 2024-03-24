import { model, models, Model } from "mongoose";
import { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface userDocument extends Document {
  email: string;
  fullname: string;
  password: string;
  role: "admin" | "user";
}

interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<userDocument, {}, Methods>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw error;
  }
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const UserModel = models.User || model("User", userSchema);
export default UserModel as Model<userDocument, {}, Methods>;
