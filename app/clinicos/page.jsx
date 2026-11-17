import ProductPage from "@/components/products/ProductPage";
import { products } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

const product = products.clinicos;

export const metadata = pageMeta({
  title: { absolute: "ClinicOs: Clinic Management Software for Indian Clinics" },
  description: "Appointments, patient records, e-prescriptions, billing and WhatsApp reminders in one simple system for small clinics in India. Set up for you, in Hindi or English.",
  alternates: { canonical: "https://themanishchauhan.in/clinicos" },
});

export default function Page() {
  return <ProductPage product={product} />;
}
