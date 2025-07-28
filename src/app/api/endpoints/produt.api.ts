const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const productApi = Object.freeze({
  GET_PRODUCT_DETAILS: `${apiUrl}/products/ielts-course`,
});
