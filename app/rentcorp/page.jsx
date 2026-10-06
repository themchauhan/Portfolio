import ProductPage from "@/components/products/ProductPage";
import { products } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

const product = products.rentcorp;

export const metadata = pageMeta({
  title: `${product.name} - ${product.tag}`,
  description: product.summary,
  alternates: { canonical: "https://themanishchauhan.in/rentcorp" },
});

export default function Page() {
  return <ProductPage product={product} />;
}
