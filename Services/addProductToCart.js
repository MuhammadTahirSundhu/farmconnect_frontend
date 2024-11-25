import { insertCartProduct } from "./cartProductServiceApi";

export const addProductToCart = async (cartId, productId, quantity) => {
  try {
    const payload = {
      cartId,
      productId,
      quantity,
    };

    await insertCartProduct(payload);
  } catch (error) {
  }
};