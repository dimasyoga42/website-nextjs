"use client"
import Link from "next/link";
import Typed from "typed.js";
import { useEffect } from "react";
const Hero = () => {
    useEffect(() => {
        // Opsi untuk animasi typed.js
        const options = {
            strings: ["hello world", "my name is", "Dimas yoga", "i am from Indonesia"],
            typeSpeed: 100,
            loop: true, 
        };

        // Inisialisasi Typed.js
        const typed = new Typed('#screen', options);

        // Cleanup saat komponen di-unmount
        return () => {
            typed.destroy();
        };
    }, []);
return (
    <>
    <div className="hero h-screen font-fira">
        <div className="hero-content text-center block">
           
            <h1 className=" text-4xl font-bold font-fira text-white" id="screen"></h1>
            <p className="font-fira text-xs text-gray-400">Web Developer | Student</p>
        </div>
    </div>
    </>
)
}
export default Hero;