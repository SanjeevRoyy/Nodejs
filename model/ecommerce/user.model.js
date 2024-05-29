import mangooose from "mangoose";
const userSchema = new mangooose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required:true

    }
  },
  { timestamps: true }
);
export const User = mangooose.model("User", userSchema);
