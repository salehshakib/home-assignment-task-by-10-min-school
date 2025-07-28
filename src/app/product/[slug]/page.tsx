import { fetchProductData } from "@/app/services/product-service";
import { LangType } from "@/types/product.types";

interface ProductPageProps {
  params: { slug: string };
  searchParams: { lang?: LangType };
}

export default async function ProductPage({
  params,
  searchParams,
}: ProductPageProps) {
  const lang = searchParams.lang || "en";
  const { data } = await fetchProductData(lang);

  console.log({ data });
  return <div>Enter</div>;
}
