import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  UserIcon
} from '@heroicons/react/20/solid'
import logo from '../../assets/logo.png'; // Tell webpack this JS file uses this image


const navigation = [
  { name: 'Accueil', href: '#', current: true },
  { name: 'Nos pratiques', href: '#', current: false },
  { name: 'Notre histoire', href: '#', current: false },
  { name: 'Actualités', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-100">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-36 ssm:h-24 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {/* Mobile menu button*/}
            <DisclosureButton className="xl:hidden group relative lg:inline-flex ssm:inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 justify-center lg:items-center lg:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="On-Zen logo"
                src={logo}
                className="h-20 w-auto ssm:h-14"
              />
            </div>
            <div className="hidden lg:ml-10 lg:block">
              <div className="flex space-x-16">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-blue'  : 'text-blue',
                      'rounded-md px-3 py-2 text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="hover:bg-light-blue hidden sm:ml-6 lg:block inline-flex items-center rounded-3xl bg-white px-3 py-2 text-lg font-semibold text-blue border-2 border-blue shadow-sm"
          >
            Vous êtes praticien ?
          </button>

            {/* Profile dropdown */}
            <button
              type="button"
              className="hover:bg-light-blue hidden sm:ml-6 lg:inline-flex items-center rounded-3xl bg-blue px-3 py-2 text-lg font-semibold text-white border-2 border-blue shadow-sm"
            >
              <UserIcon aria-hidden="true" className=" -ml-0.5 mr-1.5 h-5 w-5" />
              Se connecter
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-blue text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <DisclosureButton
              key="connect"
              as="a"
              href="#"
              className={classNames(
                'block rounded-md px-3 py-2 text-blue text-base font-medium',
              )}
            >
              Vous êtes praticien ?
            </DisclosureButton>
          <DisclosureButton
              key="connect"
              as="a"
              href="#"
              className={classNames(
                'block rounded-md px-3 py-2 text-blue text-base font-medium',
              )}
            >
              Se connecter
            </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
