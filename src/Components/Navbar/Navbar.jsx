import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'All Movies', href: '/all-movies' },
  
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("User Sign Out");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <Disclosure as="nav" className="bg-red-600 text-white fixed left-0 top-0 w-full z-50 shadow-md">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className=" group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <Link to="/"><p className='text-white text-4xl font-extrabold'>🎬</p></Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className="  text-gray-300 font-semibold',
                                                'rounded-md px-3 py-2 text-sm font-medium"
                                        >
                                            {item.name}
                                        </a>

                                    ))}
                                    {user && (
                                        <>
                                            <Link to="/add-movie"><a className="text-gray-300 font-semibold',
                                                'rounded-md px-3 py-2 text-sm font-medium" href="">Add Movie</a></Link>
                                            <Link to="/my-favorite"><a className="text-gray-300 font-semibold',
                                                'rounded-md px-3 py-2 text-sm font-medium" href="">My Favorites</a></Link>
                                        </>
                                    )}


                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <div className='md:flex md:gap-2 hidden'>
                                {user ? <Link to="/sign-in"><button onClick={handleSignOut} className="rounded-4xl btn bg-white text-black">sign Out </button></Link> : <Link to="/sign-in"><button className="rounded-4xl btn bg-white text-black">Sign In</button></Link>}
                                {/* <Link to="/sign-in"><button className="rounded-4xl btn bg-white text-black">Sign In</button></Link> */}
                                <Link to="/register"><button className="rounded-4xl btn bg-white text-black">Register</button></Link>
                            </div>

                            {user && <>
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                alt=""
                                                src={user?.photoURL}
                                                className="size-8 rounded-full"
                                            />
                                        </MenuButton>
                                    </div>

                                </Menu>
                            </>}
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                        <div className='flex gap-2 md:hidden'>
                            <Link to="/sign-in"><button className="rounded-4xl btn bg-white text-black">Sign In</button></Link>
                            <Link to="/register"><button className="rounded-4xl btn bg-white text-black">Register</button></Link>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    );
};

export default Navbar;




