import { Button } from '../ui/button';
import { Input } from '../ui/input';
function NewsLetters() {
  return (
    <div className="py-24 bg-green-300 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex  justify-center h-full flex-col">
        <div className="grid grid-cols-2 items-center gap-8 max-sm:grid-cols-1">
          <div className="flex flex-col  space-y-4 w-fit">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Blog De Lead Consulting
              </h2>

              <div className="h-1 w-20 bg-secondary rounded-full" />

              <p className="text-gray-600 max-w-2xl text-lg mt-2.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                sunt voluptatem. Consectetur voluptatibus itaque nesciunt,
                excepturi porro sed soluta. Iure quam molestiae necessitatibus,
                ut animi blanditiis sed eum cumque odio?
              </p>
            </div>

            <span className='w-full flex justify-start'>
              <Button size={'lg'} variant={'link'}>
                VOIR LE BLOG
              </Button>
            </span>
          </div>

          <div className="flex flex-row justify-center space-y-4 w-fit items-center">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                S'inscrire a notre newsletter
              </h2>

              <div className="h-1 w-20 bg-secondary rounded-full" />

              <p className="text-gray-600 max-w-2xl text-lg mt-2.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                sunt voluptatem.
              </p>

              <div className="flex items-center space-x-4 mt-4">
                <Input
                  type="email"
                  className="bg-white max-w-80"
                  placeholder="votre email"
                />

                <Button>Enregistrer</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsLetters;
