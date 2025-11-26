import { Category } from "../types";
import CategoryCard from "./CategoryCard";

interface CategoryProps {
  data: Category[] | [];
}

export default function CategoriesSection({ data }: CategoryProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-8">
        Top <span className="text-rose-500">Categories</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
