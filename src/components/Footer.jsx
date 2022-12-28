import { Popover} from '@headlessui/react'
import {BsFacebook,BsWhatsapp,BsInstagram} from 'react-icons/bs'

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center py-6 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="https://facebook.com"><BsFacebook size={32}/></a>
            <a href="https://whatsapp.com" className='ml-3'><BsWhatsapp size={32}/></a>
            <a href="https://instagram.com" className='ml-3'><BsInstagram size={32}/></a>
          </div>
        </div>
      </div>
    </Popover>
  )
}