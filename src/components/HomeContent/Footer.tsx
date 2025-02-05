

const Footer = () => {
  return (
    <footer className="relative bg-[#0F5748] text-white">
        <div className="custom-shape-divider-top-1738780874">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
</div>
      {/* Curved Shape */}
      <div className="relative">
        {/* <div className="absolute w-full h-24 bg-[#D2A341] top-0 rounded-es-4xl"></div> */}
        {/* <div className="absolute w-full h-20 bg-[#0F5748] top-6 rounded-es-4xl"></div> */}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Liens utiles</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">À propos</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Nous contacter</a></li>
              <li><a href="#" className="hover:underline">Sécurité</a></li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Opportunités</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Emploi</a></li>
              <li><a href="#" className="hover:underline">Khadamaty pour les partenaires</a></li>
              <li><a href="#" className="hover:underline">Khadamaty Business</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Nous suivre</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-8">
          <img src="/google-play.png" alt="Google Play" className="h-10 cursor-pointer" />
          <img src="/app-store.png" alt="App Store" className="h-10 cursor-pointer" />
        </div>

        {/* Policies */}
        <div className="mt-6 text-sm text-gray-300 text-center md:text-left">
          <a href="#" className="hover:underline">Conditions d'utilisation</a> ·
          <a href="#" className="hover:underline"> Politique de confidentialité</a> ·
          <a href="#" className="hover:underline"> Politique en matière de cookies</a> ·
          <a href="#" className="hover:underline"> Conformité</a>
        </div>

        {/* Language Selector */}
        <div className="mt-6 flex justify-center md:justify-start">
          <select className="bg-white text-black px-3 py-2 rounded">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
