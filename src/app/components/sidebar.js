// components/Sidebar.js
'use client'
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="hidden sm:block md:w-64 bg-white h-screen text-slate-600">
      <div className="flex items-center justify-between p-5">
        <span className="text-xl font-bold ">Nithub Smart-Home</span>
        <button
          onClick={toggleSidebar}
          className="block lg:hidden outline-none focus:outline-none"
        >
          <svg
            className="fill-current h-6 w-6 text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6.41421L13.4142 12L19 17.5858L17.5858 19L12 13.4142L6.41421 19L5 17.5858L10.5858 12L5 6.41421L6.41421 5L12 10.5858L17.5858 5L19 6.41421Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pt-2 pb-4 space-y-1`}
      >
        <Link href="/" legacyBehavior>
          <a className="block px-2 py-1 text-slate-200 font-normal rounded hover:text-slate-500 hover:bg-rose-200">
            Dashboard
          </a>
        </Link>
        <Link href="/dashboard/members" legacyBehavior>
          <a className="block px-2 py-1 text-slate-200 font-normal rounded hover:text-slate-500 hover:bg-rose-200">
            Members
          </a>
        </Link>
        <Link href="/dashboard/message" legacyBehavior>
          <a className="block px-2 py-1 text-slate-200 font-normal rounded hover:text-slate-500 hover:bg-rose-200">
            Message
          </a>
        </Link>
        <Link href="/dashboard/devices" legacyBehavior>
          <a className="block px-2 py-1 text-slate-200 font-normal rounded hover:text-slate-500 hover:bg-rose-200">
            Devices
          </a>
        </Link>
        <Link href="/dashboard/security" legacyBehavior>
          <a className="block px-2 py-1 text-slate-200 font-normal rounded hover:text-slate-500 hover:bg-rose-200">
            Security
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="block px-2 py-1 text-slate-200 font-normal rounded hover:bg-rose-200">
            Setting
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;