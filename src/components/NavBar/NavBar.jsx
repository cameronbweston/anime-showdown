import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (

<Disclosure as="nav" className="h-20 bg-white shadow-2xl flex items-center">
{({ open }) => (
	<>
		<div className="max-w-7xl w-full px-2 sm:px-6 lg:px-8">
			<div className=" flex h-16">
				<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
				</div>
				<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div className="flex-shrink-0 flex items-center">
						<span className="text-3xl">Anime Showdown</span>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
						{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
						<Link
							to="/"
							className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium no-underline"
						>
							Home
						</Link>
						<Link
							to="/users"
							className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium no-underline"
						>
							Users
						</Link>
					</div>
				</div>
				<div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<div className="">
  					<div className="bg-white flex items-center rounded-full shadow-xl">
    					<input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"></input>
    					<div className="p-2">
      					<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      					</button>
      				</div>
  					</div>
					</div>
					

					{/* Profile dropdown */}
					<Menu as="div" className="ml-3 relative">
						<div className="ml-20 -mr-12">
							<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="sr-only">User Menu</span>
								<div className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
								</div>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<Menu.Item>
									{({ active }) => (
										<a
											href={`/profile/${user.profile}`}
											className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
										>
											Profile
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
								{({ active }) => (
										<a
											href={`/friends`}
											className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
										>
											Friends
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
											to="" onClick={handleLogout}
											className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
										>
											Log Out
										</Link>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>

		<Disclosure.Panel className="sm:hidden">
			<div className="pt-2 pb-4 space-y-1">
				{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
				<Link
					to="/"
					className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Home
				</Link>
				<Link
					to="/"
					className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Users
				</Link>
				<a
					href="/"
					className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Projects
				</a>
				<a
					href="/"
					className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Calendar
				</a>
			</div>
		</Disclosure.Panel>
	</>
)}
</Disclosure>				

			) : (
				<Disclosure as="nav" className="h-20 bg-white shadow flex items-center">
{({ open }) => (
	<>
		<div className="max-w-7xl w-full px-2 sm:px-6 lg:px-8">
			<div className="relative flex justify-between h-16">
				<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
					{/* Mobile menu button */}
					<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
						<span className="sr-only">Open main menu</span>
						{open ? (
							<XIcon className="block h-6 w-6" aria-hidden="true" />
						) : (
							<MenuIcon className="block h-6 w-6" aria-hidden="true" />
						)}
					</Disclosure.Button>
				</div>
				<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div className="flex-shrink-0 flex items-center">
						<span className="text-3xl">Anime Showdown</span>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
						{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
						<Link
							to="/"
							className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium no-underline"
						>
							Home
						</Link>
					</div>
				</div>
				<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
					<div className="">
  					<div className="bg-white flex items-center rounded-full shadow-xl">
    					<input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"></input>
    					<div className="p-4">
      					<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      					</button>
      				</div>
  					</div>
					</div>
					

					{/* Profile dropdown */}
					<Menu as="div" className="relative ml-3">
						<div className="ml-20 -mr-12">
							<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<span className="sr-only">Open user menu</span>
								<button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
								</button>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<Menu.Item>
									{({ active }) => (
										<a
											href={`/profile/${user.profile}`}
											className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
										>
											Profile
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
								{({ active }) => (
										<a
											href={`/friends`}
											className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
										>
											Friends
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<Link
											to="/login" onClick={handleLogout}
											className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
										>
											Log In
										</Link>
									)}
								</Menu.Item>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</div>

		<Disclosure.Panel className="sm:hidden">
			<div className="pt-2 pb-4 space-y-1">
				{/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
				<Link
					to="/"
					className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Home
				</Link>
				<Link
					to="/"
					className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Users
				</Link>
				<a
					href="/"
					className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Projects
				</a>
				<a
					href="/"
					className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>
					Calendar
				</a>
			</div>
		</Disclosure.Panel>
	</>
)}
</Disclosure>
			)}
		</>
	)
}

export default NavBar
