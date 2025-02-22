import { useEffect, useState } from "react";
import { data } from "./data";
import CategoriesItems from "../CategoriesItems"

function Categories() {
  const [categories, setCategories] = useState<
    { id: number; name: string; icon: string }[]
  >([]);

  useEffect(() => {
    setCategories(data.categories);
  }, []);

  return (
    <div className="md:px-20 sm:px-10 my-10">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Catégories populaires</h1>
        <div className="m-6 flex w-[50%] flex-wrap justify-center">
          <CategoriesItems categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
