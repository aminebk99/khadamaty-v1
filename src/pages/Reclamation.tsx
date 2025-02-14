import { FaHome } from "react-icons/fa";
import Footer from "../components/HomeContent/Footer";
import Header from "../components/Header";

export default function ReclamationPage() {
  return (
    <>
      <Header />
      <div className="md:px-20 sm:px-10 my-10 flex flex-col min-h-screen">
        {/* Breadcrumb */}
        <nav className="p-4 text-sm flex items-center">
          <FaHome className="mr-2" /> Accueil / Page de reclamation
        </nav>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6">
            <textarea
              placeholder="Decrivez votre reclamation ici..."
              className="w-full p-4 mb-4 border rounded-xl"
            />
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-xl hover:bg-yellow-600">
              Envoyer
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
