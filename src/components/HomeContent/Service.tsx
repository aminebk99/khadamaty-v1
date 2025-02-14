import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

function Service() {
  const postText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate, animi enim deserunt tenetur dolores praesentium inventore necessitatibus modi aliquam commodi harum quaerat voluptates libero temporibus ducimus debitis quis explicabo?";
  const items = [1, 2, 3, 4, 5, 6]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, items.length - 3));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 my-10">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Meilleurs services
        </h1>

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
              disabled={currentIndex === items.length - 3}
              className="shadow-lg p-2 md:p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MoveRight size={24} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {items.map((item) => (
              <div 
                key={item} 
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-black"></div>
                  <span className="ml-4 font-medium text-gray-700">
                    Nom de l'utilisateur
                  </span>
                </div>
                
                <div className="w-full h-48 md:h-56 lg:h-60 my-6 rounded-xl bg-blue-200"></div>
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Dépannage Plombier</h3>
                  <p className="my-4 text-gray-600 line-clamp-3">
                    {postText}
                  </p>
                  <div className="w-full flex justify-center">
                    <button className="px-6 py-3 bg-[#146551] hover:bg-[#125746] text-white font-medium rounded-xl transition-colors w-full">
                      Contactez-moi
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;