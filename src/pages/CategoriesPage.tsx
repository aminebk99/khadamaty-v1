import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/HomeContent/Footer";
import { data } from "../components/HomeContent/data";

function CategoriesPage() {
  const postText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate, animi enim deserunt tenetur dolores praesentium inventore necessitatibus modi aliquam commodi harum quaerat voluptates libero temporibus ducimus debitis quis explicabo?";
  
  const [users, setUsers] = useState<{ id: number; name: string; imageUrl: string }[]>([]);

  useEffect(() => {
    setUsers(data.users);
  }, []);

  return (
    <>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {users.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            >
              {/* User Profile Section */}
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-black flex-shrink-0"></div>
                <span className="ml-4 font-medium text-gray-700 truncate">
                  {item.name}
                </span>
              </div>
              
              {/* Image Placeholder */}
              <div className="w-full aspect-video bg-blue-200 rounded-xl mb-6"></div>
              
              {/* Content Section */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Dépannage Plombier
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-3 text-sm md:text-base">
                  {postText}
                </p>
                
                {/* Spacer to push button to bottom */}
                <div className="mt-auto">
                  <button className="w-full px-4 py-3 bg-[#146551] hover:bg-[#125746] text-white font-medium rounded-xl transition-colors duration-200 text-sm md:text-base">
                    Contactez-moi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CategoriesPage;