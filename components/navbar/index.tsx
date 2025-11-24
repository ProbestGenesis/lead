
"use client"

import Logo from "../ui/logo"
import { ShoppingCart } from "lucide-react"

const link = [
  "Accueil",
  "A propos",
  "Contact"
]

function NavBar() {
  return (
    <nav className=" sticky top-0 z-50 flex  w-full items-center justify-center  py-4 px-2 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/40 ">
      <div className="flex w-full justify-between  max-w-6xl container">
        <div className="flex items-start space-x-6.5">
          <Logo />

          <ul className="max-sm:hidden flex items-center space-x-3">
            {link.map((item, idx) => (
              <li
                key={idx.toString()}
                className="transition-all decoration-2 hover:underline hover:font-bold hover:underline-offset-4 decoration-blue-700 cursor-pointer "
              >
                {item}
              </li>
            ))}
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