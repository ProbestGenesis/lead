"use client"
import ProductsCategories from "@/components/inviteShopping/productsCategories"
import PublicityBanner from "@/components/store/publicityBanner"
import { categories } from "@/data/categories"
import { CatgeoriesList } from "@/components/inviteShopping/productsCategories"
import { usePathname } from "next/navigation"
function StoreLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname()

  const dontVisible = pathname.includes('kit')
  if (dontVisible) {
    return (
      <div className="flex flex-col w-full space-y-24">
        <div>{children}</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full space-y-24">
      <div className="w-full">
        <PublicityBanner />
      </div>

      <div className="mx-auto  w-full flex flex-col space-y-2">
        <h3 className="font-bold text-3xl ms:text-4xl tracking-tight px-4 text-gray-900">
          Categories
        </h3>
        <CatgeoriesList categories={categories} iconSize="small" />
      </div>

      <div className="bg-white pt-8">{children}</div>
    </div>
  );
}
export default StoreLayout