// components/ProductList.tsx
"use client";

import { useState } from "react";
import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "@/components/ui/product-card";
// IMPORTANT: If getProducts is server-only, replace with a client fetch to your API route.
//import getProducts from "@/actions/get-products";

interface ProductListProps {
  popular: Product[];
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ popular, items }) => {
  const [filter, setFilter] = useState(false);
  //const [featured, setFeatured] = useState<Product[]>([]);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState<string | null>(null);

  const listToRender = filter ? popular : items;

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          {filter ? "Popular" : "All"}{" "}
          <span className="text-rose-500">Products</span>
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setFilter(false)}
            className={`px-4 py-2 font-medium ${
              !filter
                ? "text-rose-500 border-b-2 border-rose-500"
                : "text-gray-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter(true)}
            className={`px-4 py-2 font-medium ${
              filter ? "text-rose-500" : "text-gray-600 hover:text-rose-500"
            }`}
          >
            Popular
          </button>
        </div>
      </div>

      {filter && (
        <p className="text-center text-rose-500 text-2xl">
          Loading popular products...
        </p>
      )}
      {/* {error && <p className="text-sm text-red-500">{error}</p>} */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {(!listToRender || listToRender.length === 0) && <NoResults />}

        {listToRender?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
