import { useEffect, useState } from "react";
import CategoriesItems from "../components/CategoriesItems";
import Header from "../components/Header";
import Footer from "../components/HomeContent/Footer";
import { data } from "../components/HomeContent/data";
import CategoriesWithIcons from "../components/CategoriesWithIcons";

function CategoriesFilterPage() {
  const [categories, setCategories] = useState<
    { id: number; name: string; icon: string }[]
  >([]);
  useEffect(() => {
    setCategories(data.categories);
  }, []);
  return (
    <>
      <Header />
      <div>
        <div className="relative">
          {/* <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#146551"
                fill-opacity="1"
                d="M0,192L120,208C240,224,480,256,720,266.7C960,277,1200,267,1320,261.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#CD9933"
                fill-opacity="1"
                d="M0,192L120,208C240,224,480,256,720,266.7C960,277,1200,267,1320,261.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              ></path>
            </svg>
          </div> */}

          <h2 className="">Categories : </h2>
          <span></span>
        </div>
        <div>
          <div>Accueil</div>
          <div>
            <CategoriesWithIcons categories={categories}/>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <CategoriesItems categories={categories} />
            {/* <span className="bg-amber-200 py-4 flex items-center justify-center">1</span>
                <span className="bg-amber-200 py-4 flex items-center justify-center">2</span>
                <span className="bg-amber-200 py-4 flex items-center justify-center">3</span>
                <span className="bg-amber-200 py-4 flex items-center justify-center">4</span>
                <span className="bg-amber-200 py-4 flex items-center justify-center">5</span>
                <span className="bg-amber-200 py-4 flex items-center justify-center">6</span>
                <span className="bg-amber-200 py-4 flex items-center justify-center">7</span> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoriesFilterPage;
