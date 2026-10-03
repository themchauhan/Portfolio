import ProductPage from "@/components/products/ProductPage";
import { products } from "@/lib/products";

const product = products.cafecorp;

export const metadata = {
  title: `${product.name} - ${product.tag}`,
  description: product.summary,
  alternates: { canonical: "https://themanishchauhan.in/cafecorp" },
};

export default function Page() {
  return <ProductPage product={product} />;
}
