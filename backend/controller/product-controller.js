import Product from "../model/product-schema.js";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.log("error while finding data");
    res.status(501).json(error);
  }
};
