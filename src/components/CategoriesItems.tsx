interface Category {
    id: number;
    name: string;
    icon: string;
  }
  
  interface CategoriesItemsProps {
    categories: Category[];
  }
  
  function CategoriesItems({ categories }: CategoriesItemsProps) {
    return (
      <>
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col justify-center items-center">
            <div className="w-20 h-20 bg-blue-200 shadow rounded-full m-4"></div>
            <span className="bg mx-4 py-1 px-4 text-white bg-[#146551]">
              {cat.name}
            </span>
          </div>
        ))}
      </>
    );
  }
  
  export default CategoriesItems;
  