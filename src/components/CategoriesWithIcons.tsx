import { MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
interface Category {
    id: number;
    name: string;
    icon: string;
  }
  
  interface CategoriesItemsProps {
    categories: Category[];
  }
  

function CategoriesWithIcons({ categories }: CategoriesItemsProps) {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex(prev => Math.min(prev + 1, categories.length - 3));
      };
    
      const handlePrev = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      };

  return (
    <div className="px-10">
        <div className="w-full flex justify-end items-center my-6 md:my-10">
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="shadow-lg p-2 md:p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MoveLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === categories.length - 3}
              className="shadow-lg p-2 md:p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MoveRight size={24} />
            </button>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-amber-300 my-4">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {categories.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow items-center justify-center"
              >
                
                
                
                {item.name}
              </div>
            ))}
          </div>
        </div>
      
    </div>
  )
}

export default CategoriesWithIcons
