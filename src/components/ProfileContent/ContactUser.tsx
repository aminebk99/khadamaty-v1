import { Mail, Phone } from 'lucide-react'

function ContactUser() {
  return (
    <div className='flex flex-col items-center gap-2 w-full justify-center'>
        <button className='bg-[#146551] text-white px-4 py-2 rounded flex items-center justify-center gap-2'>
            <Phone size={16} />
            Appeler
        </button>
        <button className='bg-[#146551] text-white px-4 py-2 rounded flex items-center justify-center gap-2'>
            <Mail size={16} />
            Envoyer un message
        </button>
        
    </div>
  )
}

export default ContactUser
