'use client'
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    const [menuIcon, setMenuIcon] = useState(false);

    const HandleSmallerScreenNavigation = () => {
        setMenuIcon(!menuIcon);
    }

    return (
        <header className="bg-slate-400 text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
                <div>
                    <Link href='/' onClick={HandleSmallerScreenNavigation}>
                        <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl">javascript</span>
                    </Link>
                </div>

                {/* Larger screen navigation */}
                <ul className="hidden md:flex uppercase font-semibold text-2xl lg:text-[20px] text-slate-500">
                    <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
                        <Link href='/'>Home</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
                        <Link href='/about'>About Us</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#CEFF00]">
                        <Link href='/contact'>Contact Us</Link> {/* Fixed typo in 'countact' */}
                    </li>
                </ul>

                {/* Smaller screen navigation */}
                <div onClick={HandleSmallerScreenNavigation} className="flex md:hidden">
                    {menuIcon ? (
                        <AiOutlineClose  size={25} className="text-[#CEFF00]" />
                    ) : (
                        <AiOutlineMenu size={25} className="text-[#CEFF00]" />
                    )}
                </div>


                <div className={menuIcon ?
                    "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-start items-start w-full h-screen bg-slate-800 text-white ease-in duration-300"
                    :
                    "md:hidden absolute top-[100px] right-0 left-[100%] flex justify-start items-start w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"}
                >
                <div className="w-full ">
                    <ul className="uppercase font-bold text-2xl">
                        <li onClick={HandleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>

                        <li onClick={HandleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>

                        <li onClick={HandleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                            <Link href="/countact">Contact</Link>
                        </li>

                    </ul>
                </div>

                </div>
            </nav>
        </header>
    );
}
