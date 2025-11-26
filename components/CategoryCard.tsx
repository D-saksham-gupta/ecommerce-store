"use client";
import { Category } from "../types";
import { useRouter } from "next/navigation";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const router = useRouter();
  const imageUrl = category.billboard?.imageUrl;

  return (
    <div
      onClick={() => router.push(`/category/${category.id}`)}
      className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
        <img src={imageUrl} alt={category.name} />
      </div>
      {/* <h3 className="text-sm font-medium text-gray-900 mb-1 text-center">
        {category.name}
      </h3> */}
      <p className="text-sm text-rose-500 font-medium">{category.name}</p>
    </div>
  );
}
