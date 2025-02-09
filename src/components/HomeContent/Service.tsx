import { MoveLeft, MoveRight } from "lucide-react";

function Service() {
  const postText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate, animi enim deserunt tenetur dolores praesentium inventore necessitatibus modi aliquam commodi harum quaerat voluptates libero temporibus ducimus debitis quis explicabo?";
  
  const truncatedText =
    postText.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <div className="md:px-20 sm:px-10 my-10">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Meilleurs services</h1>
        <div className="w-full flex justify-end my-10">
          <span className="shadow-lg p-2 mr-2 rounded-full cursor-pointer">
            <MoveLeft size={24} />
          </span>
          <span className="shadow-lg p-2 rounded-full cursor-pointer">
            <MoveRight size={24} />
          </span>
        </div>
        
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-amber-300 p-4 rounded-xl">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-4 rounded-2xl shadow w-full bg-white">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-black"></div>
                <span className="ml-4 font-medium text-gray-700">Nom de l'utilisateur</span>
              </div>
              <div className="w-full h-60 my-10 rounded-xl bg-blue-200"></div>
              <div>
                <h3 className="text-2xl font-bold">Dépannage Plombier</h3>
                <p className="my-4 text-gray-600">{truncatedText}</p>
                <div className="w-full flex items-center justify-center">
                  <button className="px-4 py-2 bg-[#146551] text-white font-medium border-none rounded-xl w-[80%]">
                    Contactez-moi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Service;
