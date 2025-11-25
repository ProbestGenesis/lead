import { Button } from '../ui/button';
function About() {
  return (
    <div className="bg-yellow-300 py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex  justify-center h-full flex-col">
        <div className="flex max-sm:flex-col flex-row justify-between space-y-4 w-fit items-center">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Qui somme nous?
            </h2>

            <div className="h-1 w-20 bg-secondary rounded-full" />

            <p className="text-gray-600 max-w-3xl text-lg mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              sunt voluptatem. Consectetur voluptatibus itaque nesciunt,
              excepturi porro sed soluta. Iure quam molestiae necessitatibus, ut
              animi blanditiis sed eum cumque odio?
            </p>
          </div>

          <span className="flexjustify-end mt-6 mx-6">
            <Button size={'lg'} variant={'outline'} className='border-transparent rounded-full'>
              En savoir plus
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default About;
