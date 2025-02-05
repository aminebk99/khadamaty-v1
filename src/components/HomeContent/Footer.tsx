import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="grid grid-cols-4 bg-green-800 text-white justify-center py-6">
        <div className="flex flex-col items-center">
            <h3 className="text-xl">Liens utiles</h3>
            <Link to={""}>A propos</Link>
            <Link to={""}>FAQ</Link>
            <Link to={""}>Blog</Link>
            <Link to={""}>Nous Contactez</Link>
            <Link to={""}>Securité</Link>
        </div>
        <div className="flex flex-col items-center">
        <h3 className="text-xl">Opportunités</h3>
            <Link to={""}>Emploi</Link>
            <Link to={""}>Khadamatt pour les partenaires</Link>
            <Link to={""}>Khadamaty Business</Link>
        </div>
        <div className="flex flex-col items-center">
        <h3 className="text-xl">Nous Suivre</h3>
            <Link to={""}>Facebook</Link>
            <Link to={""}>Twitter</Link>
            <Link to={""}>Instagram</Link>
        </div>
        <div className="flex flex-col items-center">
            <Link to={""}>Conditions d'utilisation</Link>
            <Link to={""}>Politique de confidentialité</Link>
            <Link to={""}>Politique en matiere de cookie</Link>
            <Link to={""}>Conformité</Link>
        </div>

      
    </footer>
  )
}

export default Footer
