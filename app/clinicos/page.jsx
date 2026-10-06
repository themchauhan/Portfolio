import ProductPage from "@/components/products/ProductPage";
import { products } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

const product = products.clinicos;

export const metadata = pageMeta({
  title: `${product.name} - ${product.tag}`,
  description: product.summary,
  alternates: { canonical: "https://themanishchauhan.in/clinicos" },
});

export default function Page() {
  return <ProductPage product={product} />;
}
