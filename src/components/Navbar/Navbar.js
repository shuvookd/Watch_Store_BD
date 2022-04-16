import React, { useState } from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/solid'
import Links from './../Links/Links';
const Navbar = () => {
    const [open, setOpen] = useState(false);
        const routes = [
        {id:1, name: 'Home', link: '/home'},
        {id:2, name: 'Reviews', link: '/reviews'},
        {id:3, name: 'Dashboard', link: '/dashboard'},
        {id:4, name: 'Blogs', link: '/blogs'},
        {id:5, name: 'About', link: '/about'},
    ]
    return (
        <nav className='bg-indigo-400'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in md:static bg-indigo-400 w-full ${open ? 'top-6' : 'top-[-120px]'}`}>
                {routes.map(route => <Links
                 key={route.id}
                 route={route}
                 ></Links> )}
            </ul>
        </nav>
    );
};

export default Navbar;