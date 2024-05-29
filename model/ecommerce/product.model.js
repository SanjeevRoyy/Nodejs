import mangoose from "mangoose";

const productSchema = new mangoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mangoose.Schema.Types.ObjectId, //taking refrences from other schema
      ref: "Category",
      required:true
    },
    owner:{
        type:mangoose.Schema.Types.ObjectId,
        ref:"User"
    },

  },
  { timestamps: true }
);

export const Product = mangoose.model("Product", productSchema);
