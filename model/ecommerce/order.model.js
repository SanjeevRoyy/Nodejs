import mangoose from "mangoose";
const orderITemSchema = new mangoose.Schema({
  productId: {
    type: mangoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantiti: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mangoose.Schema(
  {
    orderprice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: [orderITemSchema],
    // we can also do it in this way but we do create seperate schema
    // orderItem: [
    //   {
    //     productId: {
    //       type: mangoose.Schema.Types.ObjectId,
    //       ref: "Product",
    //     },
    //   },
    // ],
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);
export const Order = mangoose.model("Order", orderSchema);
