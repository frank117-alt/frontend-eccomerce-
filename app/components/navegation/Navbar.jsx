import Sidebard from '@/components/Home/Sidebar'
import React, {useState} from 'react';
import{useRouter} from 'next/navigation'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Team', href: '#', current: false },
  { name: 'data', href: '#', current: false }
]







function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar(

){
   
  const [searchTerm, setSearchTerm] = useState('');
  const  router = useRouter();

  const handleSearch= (e)=>{
    e.preventDefault();
   if(searchTerm.trim() !== ''){
    router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
   }
  }

  console.log(searchTerm)


   
    return(
        <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-center">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex rounded-md p-2  hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex  items-end justify-center sm:items-center sm:justify-start">
                  
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 "  x-data="{ open: false }">

                     
                      

   <form  onSubmit={handleSearch}>                   
   <div className="pt-2 relative mx-auto text-gray-600">

    <input
      className="border-2 border-gray-600 bg-white h-10 px-5 pr-40 rounded-full text-sm focus:outline-none"
      type="text"
      name="search"
      placeholder="Search"
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
      <svg
        className="text-gray-600 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style={{ enableBackground: "new 0 0 56.966 56.966" }}
        xmlSpace="preserve"
        width="512px"
        height="512px"
      >
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
    </button>
  </div>
  </form>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover: hover:text-black-400',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>

            <Sidebard/>

          </>
        )}
      </Disclosure>
        

    )

    
}
export default Navbar