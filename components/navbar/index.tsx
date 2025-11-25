
"use client"

import Link from "next/link";
import Logo from "../ui/logo"
import { ShoppingCart } from "lucide-react"

const link = [
  "Accueil",
  "A propos",
  "Contact"
]

function NavBar() {

  const href = link.map((item) => {
    switch (item) {
      case "Accueil":
        return "/"
        break;
      case "A propos":
        return "/about"
        break;
      case "Contact":
        return "/contact"
        break;

      default:
        return "/"
        break;
    }
  })
  return (
    <nav className=" sticky top-0 z-50 flex  w-full items-center justify-center  py-4 px-2 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/40 ">
      <div className="flex w-full justify-between items-center  max-w-6xl container">
        <div className="flex items-center justify-start space-x-6.5">
          <Logo />

          <ul className="max-sm:hidden flex items-center space-x-3">
            {link.map((item, idx) => (
             <Link href={href[idx]} key={idx.toString()}> <li
                
                className="transition-all decoration-2 hover:underline hover:font-bold hover:underline-offset-4 decoration-blue-700 cursor-pointer "
              >
                {item}
                
              </li>
           </Link> ))}

            <li className="mx-4 transition-all decoration-2 hover:underline hover:font-bold hover:underline-offset-4 decoration-blue-700 cursor-pointer">
              Carrière
            </li>
          </ul>
        </div>

        <div>
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
}
export default NavBar