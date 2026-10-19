
import { Suspense } from "react";

export default function Page({ params }) {
  return (
    <Suspense fallback={<p>Loading category...</p>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }) {
  const { Id } = await params;
  // const Response = await fetch("https://openapi.programming-hero.com/api/bazardor/products?category=chal")

  return (
    <div>
      <h1>Category ID: {Id}</h1>
    </div>
  );
}
