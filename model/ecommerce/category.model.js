import mangoose from "mangoose";
import { type } from "os";
const categorySchema = new mangoose.schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Category = mangoose.model("Category", categorySchema);
