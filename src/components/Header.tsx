

function Header() {
  return (
    <header className='bg-[#146551] w-full flex items-center justify-between px-10 py-5'>
        <div className='text-white'>
            {/* <img src={logo} alt="" /> */}
            logo

        </div>
        <div className=''>
            <button className='px-6 py-2 border border-white font-medium text-white mr-6 rounded-xl'>Connexion</button>
            <button className='bg-white px-6 py-2 rounded-xl font-medium text-[#146551]'>Inscription</button>
        </div>
      
    </header>
  )
}

export default Header
