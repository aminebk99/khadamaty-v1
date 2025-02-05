import { useEffect, useState } from "react";
import { data } from "./data";

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
          {categories.map((cat) => (
            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-blue-200 shadow rounded-full m-4"></div>
              <span className="bg mx-4 py-1 px-4 text-white bg-[#146551]">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
