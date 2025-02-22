import { Link } from "react-router-dom"
import logo from "../assets/khadamatylogomcd.png"
function Header() {
  return (
    <header className='bg-[#146551] w-full flex items-center justify-between px-10 py-5'>
        <div className='text-white'>
            <img src={logo} alt="" className="w-30"/>
            {/* logo */}
        </div>
        <div className=''>
            <Link className='sm:text-xs px-6 py-2 border border-white font-medium text-white mr-2 lg:mr-6 rounded-xl' to={"/login"}>Connexion</Link>
            <Link className='bg-white sm:text-xs px-6 py-2 rounded-xl font-medium text-[#146551] ' to={"/register"}>Inscription</Link>
        </div>
    </header>
  )
}

export default Header
