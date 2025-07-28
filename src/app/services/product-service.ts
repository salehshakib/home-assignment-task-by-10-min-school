import { productApi } from "@/app/api/endpoints/produt.api";
import { LangType } from "@/types/product.types";
import axios from "axios";

export const fetchProductData = async (lang: LangType = "en") => {
  try {
    const { data } = await axios.get(productApi.GET_PRODUCT_DETAILS, {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      params: {
        lang,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
};
