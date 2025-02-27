// import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Header from '../components/Header';
import ContactUser from '../components/ProfileContent/ContactUser';
import Mywork from '../components/ProfileContent/Mywork';

export default function ProfilePage() {
  return (
    <>
    <Header />
    <div className='relative'>

      {/* <div className='bg-[#CD9933] h-[50vh] w-full rounded-bl-[50%] rounded-br-[30%] absolute'>
        

      </div>
      <div className='bg-[#146551] h-[50vh] w-full rounded-bl-[70%] rounded-br-[5%] absolute'>

      </div> */}

      <Mywork />
      <ContactUser />      
    </div>
    </>
    // <div className="min-h-screen bg-gray-100">
    //   {/* Header */}

    //   {/* Profile Section */}
    //   <section className="bg-green-700 text-white py-10 px-4 flex flex-col items-center relative">
    //     <img
    //       src="/path/to/profile.jpg"
    //       alt="Ismail Skafandri"
    //       className="w-32 h-32 rounded-full border-4 border-yellow-500 mb-4"
    //     />
    //     <h2 className="text-2xl font-bold">Ismail Skafandri</h2>
    //     <p className="text-sm mb-2">Peintre<br/>Marrakech, Morocco, 123 214</p>
    //     <p className="text-yellow-300 text-lg">★★★☆☆</p>
    //   </section>

    //   {/* Main Content */}
    //   <main className="p-6">
    //     <h3 className="text-xl font-semibold mb-4">Mon travail</h3>
    //     <div className="grid grid-cols-2 gap-4 mb-6">
    //       <img src="/path/to/work1.jpg" alt="work 1" className="rounded-lg" />
    //       <img src="/path/to/work2.jpg" alt="work 2" className="rounded-lg" />
    //       <img src="/path/to/work3.jpg" alt="work 3" className="rounded-lg" />
    //       <img src="/path/to/work4.jpg" alt="work 4" className="rounded-lg" />
    //     </div>

    //     <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
    //       <button className="bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2">
    //         <FaPhone /> APPELER
    //       </button>
    //       <button className="bg-white text-green-700 border border-green-700 px-6 py-2 rounded flex items-center gap-2">
    //         <FaEnvelope /> Envoyer un message
    //       </button>
    //     </div>

    //     <h3 className="text-xl font-semibold mb-4">Evaluation du service</h3>
    //     <textarea
    //       className="w-full p-4 border border-gray-300 rounded mb-4"
    //       placeholder="Ajoutez vos commentaires..."
    //     ></textarea>
    //   </main>

     
    // </div>
  );
}
