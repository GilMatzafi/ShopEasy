export const BASE_URL =
  process.env.NODE_ENV === "develeopment" ? "http://localhost:5001" : "";

export const PRODUCT_URL = "/api/products";
export const USERS_URL = "/api/users/";
export const ORDER_URL = "/api/orders/";
export const PAYPAL_URL = "/api/config/paypal/";
