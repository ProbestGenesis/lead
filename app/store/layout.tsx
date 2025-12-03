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

      <div className="mx-auto  w-full">
        <CatgeoriesList categories={categories} iconSize="small" />
      </div>

      <div className="bg-white pt-8">{children}</div>
    </div>
  );
}
export default StoreLayout