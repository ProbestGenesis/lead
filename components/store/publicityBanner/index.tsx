import { Button } from '@/components/ui/button';

type Props = {};
function PublicityBanner({}: Props) {
  return (
    <div className="py-12 px-4 bg-yellow-300  flex items-center justify-center">
      <div className="container 2xl:px-12 mx-auto">
        <div>
          <div className="flex flex-col space-y-4.5">
            <h3 className="font-bold tracking-tight antialiased text-3xl p-2 border-white w-fit border-2">
              Demain est solaire
            </h3>

            <p className="max-w-3xl text-gray-600  text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
              sed velit eligendi nisi quasi fugit provident, qui obcaecati iste
              nulla, eos cupiditate libero ipsa fuga deserunt deleniti facilis
              excepturi non.
            </p>

            <span className="flex justify-center">
              <Button
                size={'lg'}
                variant={'outline'}
                className="border-transparent rounded-full"
              >
                Decouvrir nos offres
              </Button>
            </span>
          </div>

          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}
export default PublicityBanner;
