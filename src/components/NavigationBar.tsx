import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CompanyLogo from '../assets/CompanyLogo.svg'
const navigation = [
  { name: 'Captains Services', href: '#', current: false,dropdown:true },
  { name: 'Blog', href: '#', current: false ,dropdown:true},
  { name: 'About Us', href: '#', current: false ,dropdown:true},
  { name: 'Pricing', href: '#', current: false ,dropdown:true},
  { name: 'Cooperation', href: '#', current: false ,dropdown:true},
  { name: "CF's Legal.ai", href: '#', current: false ,dropdown:true},
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationBar() {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="bg-white group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:border-none  focus:outline-none ">
              <span className="absolute " />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="bg-white block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="bg-white hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="flex shrink-0 items-center">
              <img
                alt="Captain Frank"
                src={CompanyLogo}
                className="h-9 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    style={{color:'#425B76'}}
                    className={classNames(
                      item.current ? 'underline' : 'hover:underline-offset-4 hover:underline',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        
        </div>
      </div>

      <DisclosurePanel className="sm:hidden transition-all duration-300 ease-in-out transform origin-top">
        {({ open }) => (
          <div className={`space-y-1 px-2 pb-3 pt-2 
            ${open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}
            transition-all duration-300 ease-in-out transform origin-top`}
          >
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                style={{color:'#425B76'}}
                className={classNames(
                  item.current ? 'underline-offset-4 underline' : 'hover:underline-offset-4 hover:underline',
                  'block rounded-md px-3 py-2 text-base font-medium',
                  'transition-all duration-200 ease-in-out'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        )}
      </DisclosurePanel>
    </Disclosure>
  )
}
