import Image from "next/image";
import logoNext from '@/../public/logo.png';
const Navbar = () => {
return (
<>
    <div className="navbar bg-base-100  justify-between font-fira z-10 fixed items-center">
      <div className="avatar">
      <div className="w-10 rounded-full ml-2">
      <Image src={logoNext} width={10} height={10} sizes="cover" alt="img"/>
    </div>
      </div>
       
       <ul className="menu menu-horizontal text-white md:flex hidden" >
  <li className="underline"><a>work</a></li>
  <li className="underline"><a>about</a></li>
  <li className="underline"><a>contact</a></li>
</ul>
<div className="dropdown dropdown-bottom mr-5 md:hidden">
  <div tabIndex={0} role="button" className="btn m-1">me</div>
  <ul tabIndex={0} className="dropdown-content menu z-[1] w-30  shadow text-white text-center">
    <li><a>work</a></li>
    <li><a>about</a></li>
    <li><a>contact</a></li>
  </ul>
</div>

   </div>
</>
)
}
export default Navbar;