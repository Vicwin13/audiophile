// app/category/[name]/page.tsx
"use client";

import Link from "next/link";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { useQuery } from "convex/react";

export default function CategoryPage() {
  const { name } = useParams<{ name: "speakers" | "headphones" | "earphones" }>();
  const products = useQuery(api.products.list, { category: name }) ?? [];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold capitalize mb-4">{name}</h1>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {products?.map((p) => (
          <Link key={p._id} href={`/product/${p.slug}`} className="border rounded-xl p-4 hover:shadow">
            <div className="aspect-square bg-gray-100 rounded mb-3 overflow-hidden flex items-center justify-center">
              {p.image ? <img src={p.image} alt={p.title} className="object-cover w-full h-full" /> : null}
            </div>
            <div className="font-semibold">{p.title}</div>
            <div>₦{(p.price / 100).toLocaleString()}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
