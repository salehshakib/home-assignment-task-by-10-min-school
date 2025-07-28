import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProductData = async (lang: "en" | "bn" = "en") => {
  try {
    const { data } = await axios.get(`${apiUrl}/products/ielts-course`, {
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
