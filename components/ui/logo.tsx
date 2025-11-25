
"use client"
import Link from "next/link"
import { Amaranth } from "next/font/google"


  const amaranth = Amaranth({
    weight: ['400', '700'],
    subsets: ['latin']
  })
function Logo() {

  return (
      <Link href="/" className={`text-2xl font-bold text-gray-900 ${amaranth.className}`}>
          Logo
      </Link>
  )
}
export default Logo