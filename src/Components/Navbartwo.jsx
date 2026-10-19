
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoryNavbar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://api.api-store.workers.dev/api/bazardor/categories"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Category API error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <nav className="w-full border-b border-[#E5EBE5] bg-[#FCFDFC]">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap sm:gap-7">
          {loading ? (
            <p className="py-3 text-sm text-gray-500">
              ক্যাটাগরি লোড হচ্ছে...
            </p>
          ) : error ? (
            <p className="py-3 text-sm text-red-500">
              ক্যাটাগরি লোড করা যায়নি।
            </p>
          ) : (
            categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="flex h-10 shrink-0 items-center gap-1.5 border-b-2 border-transparent text-[13px] font-semibold text-[#26352C] transition-colors hover:border-[#07883F] hover:text-[#07883F]"
              >
                <span aria-hidden="true">{category.icon}</span>
                <span>{category.nameBn}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </nav>
  );
}
