const Footer = () => {
  return (
    <footer className="relative bg-[#0F5748] text-white mt-20">
      {/* Curved Divider */}
      <div className="custom-shape-divider-top-1738780874">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-20 md:h-24 lg:h-28"
        >
          <path 
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
            className="shape-fill fill-[#0F5748]"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#D2A341] mb-4">Liens utiles</h4>
            <ul className="space-y-3">
              {['À propos', 'FAQ', 'Blog', 'Nous contacter', 'Sécurité'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-[#D2A341] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#D2A341] mb-4">Opportunités</h4>
            <ul className="space-y-3">
              {['Emploi', 'Khadamaty pour les partenaires', 'Khadamaty Business'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-[#D2A341] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#D2A341] mb-4">Nous suivre</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-[#D2A341] transition-colors duration-300"
                  aria-label={social}
                >
                  <img 
                    src={`/${social.toLowerCase()}.svg`} 
                    alt={social} 
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#D2A341] mb-4">Newsletter</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="px-4 py-2 rounded-lg bg-white/20 border border-transparent focus:outline-none focus:border-[#D2A341] placeholder:text-white/70"
              />
              <button
                type="submit"
                className="bg-[#D2A341] text-[#0F5748] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <a href="#" className="w-48 hover:scale-105 transition-transform duration-300">
            <img src="/google-play-badge.png" alt="Google Play" className="w-full h-auto" />
          </a>
          <a href="#" className="w-48 hover:scale-105 transition-transform duration-300">
            <img src="/app-store-badge.png" alt="App Store" className="w-full h-auto" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Policies */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            {["Conditions d'utilisation", "Politique de confidentialité", "Politique en matière de cookies", "Conformité"].map((policy) => (
              <a 
                key={policy}
                href="#" 
                className="hover:text-[#D2A341] transition-colors duration-300"
              >
                {policy}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <select 
              className="appearance-none bg-transparent border border-white/30 rounded-lg py-2 pl-4 pr-8 focus:outline-none focus:border-[#D2A341] cursor-pointer"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Khadamaty. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;