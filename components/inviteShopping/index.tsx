import { Button } from "../ui/button";
function InviteShopping() {
    return (
      <div className="py-24 px-4 md:px-6 lg:px-8 relative">
        <div className="absolute inset-0  bg-linear-to-t from-blue-300/60 to-blue-300/10" />
        <div className="container mx-auto flex  justify-center h-full flex-col">
          <div className="flex  max-sm:flex-col flex-row justify-center space-y-4 w-fit items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 max-w-3xl">
                Visitez notre boutique pour connaitre tout nos produits
              </h2>

              <div className="h-1 w-20 bg-secondary rounded-full" />

              <p className="text-gray-600 max-w-2xl text-lg mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                sunt voluptatem. Consectetur voluptatibus itaque nesciunt,
                excepturi porro sed soluta. Iure quam molestiae necessitatibus,
                ut animi blanditiis sed eum cumque odio?
              </p>
            </div>

            <span className="flex justify-end mt-6">
              <Button size={'lg'} className="border-transparent rounded-full z-20">
                Visitez
              </Button>
            </span>
          </div>
        </div>

        <div className="absolute bg-pink-300/80 -bottom-20 right-20 w-32 h-92 border-transparent rounded-full  hover:scale-120 transition-all " />
      </div>
    );
}
export default InviteShopping