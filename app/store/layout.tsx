import ProductsCategories from "@/components/inviteShopping/productsCategories"
import PublicityBanner from "@/components/store/publicityBanner"
import { categories } from "@/data/categories"
import { CatgeoriesList } from "@/components/inviteShopping/productsCategories"
 
function StoreLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col space-y-12">
      <div className="w-full">
        <PublicityBanner />
      </div>

      <div className="flex items-center justify-center w-full">
        <CatgeoriesList categories={categories} iconSize="small" />
      </div>

      <div>{children}</div>
    </div>
  );
}
export default StoreLayout