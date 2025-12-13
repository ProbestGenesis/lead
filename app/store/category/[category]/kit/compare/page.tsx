"use client"

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardFooter,
  CardAction,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  Zap,
  Package,
  DollarSign,
  Tv,
  Lightbulb,
  Battery,
  Wind,
  Globe,
  Check,
} from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import { kitData } from '@/data/kitdata';
import { SolarKit } from '@/data/kitdata';

// --- MAPPING POUR LA TRADUCTION DES CLÉS EN FRANÇAIS ---
 const COMPONENT_NAMES_FR: Record<string, string> = {
  panel: 'Panneau Solaire',
  panels: 'Panneaux Solaires',
  battery: 'Batterie',
  batteries: 'Batteries',
  regulator: 'Régulateur',
  inverter: 'Convertisseur',
  bulbs: 'Ampoules LED',
  television: 'Télévision',
  fan: 'Ventilateur',
  fans: 'Ventilateurs',
  decoder: 'Décodeur',
  bonus: 'Bonus (Abonnement)',
};

// Fonction pour récupérer le nom français ou la clé par défaut
export const GetComponentName = (key: string) => {
  return COMPONENT_NAMES_FR[key] || key.charAt(0).toUpperCase() + key.slice(1);
};
// --------------------------------------------------------

// Fonction pour déterminer une icône basée sur le nom du composant
export const GetComponentIcon = (key:string) => {


  const { kitId } = useParams()
  if(kitId === undefined){
    switch (key) {
    case 'panel':
    case 'panels':
      return <Zap   className="w-4 h-4 text-secondary-foreground" />;
    case 'battery':
    case 'batteries':
      return <Battery  className="w-4 h-4 text-secondary-foreground" />;
    case 'regulator':
      return <Globe  className="w-4 h-4 text-secondary-foreground" />;
    case 'inverter':
      return <Zap  className="w-4 h-4 text-secondary-foreground" />;
    case 'bulbs':
      return <Lightbulb  className="w-4 h-4 text-secondary-foreground" />;
    case 'television':
      return <Tv  className="w-4 h-4 text-secondary-foreground" />;
    case 'fan':
    case 'fans':
      return <Wind  className="w-4 h-4 text-secondary-foreground" />;
    case 'decoder':
    case 'bonus':
      return <Check  className="w-4 h-4 text-secondary-foreground" />;
    default:
      return <Package  className="w-4 h-4 text-secondary-foreground" />;
  }
  }
  switch (key) {
    case 'panel':
    case 'panels':
      return (
        <Zap
         
          className="w-24 h-24 text-secondary-foreground"
        />
      );
    case 'battery':
    case 'batteries':
      return <Battery className="w-24 h-24 text-secondary-foreground" />;
    case 'regulator':
      return <Globe className="w-24 h-24 text-secondary-foreground" />;
    case 'inverter':
      return <Zap className="w-24 h-24 text-secondary-foreground" />;
    case 'bulbs':
      return <Lightbulb className="w-24 h-24 text-secondary-foreground" />;
    case 'television':
      return <Tv className="w-24 h-24 text-secondary-foreground" />;
    case 'fan':
    case 'fans':
      return <Wind stroke={"yellow"} className="w-24 h-24 text-secondary-foreground" />;
    case 'decoder':
    case 'bonus':
      return <Check className="w-24 h-24 text-secondary-foreground" />;
    default:
      return (
        <Package
          stroke={'yellow'}
          className="w-24 h-24 text-secondary-foreground"
        />
      );
  }
};

function Page() {
  
  const { kitId } : {kitId : string}= useParams()

  return (
    <section className="bg-gray-50 relative">
      <div className="container mx-auto 2xl:px-12 max-sm:px-4 py-12">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Trouvez le bonheur avec nos kits solaires
          </h2>
          <div className="h-1 w-20 bg-secondary rounded-full" />
          <p className="text-gray-600 max-w-2xl text-left text-lg">
            Des solutions complètes adaptées aux particuliers et professionnels,
            réalisées dans le respect strict des normes en vigueur.
          </p>
        </div>

        {/* Kits Solar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kitData.solar_kits.map((item, idx) => (
            <Card
              className="rounded-xl py-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:w-3xs xl:w-xs 2xl:w-sm "
              key={idx.toString()}
            >
              {/* Card Header (Image Placeholder and Title) */}
              <CardHeader className="p-0">
                {/* Placeholder Image Div */}
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                  [Image du {item.name}]
                </div>

                <div className="p-4 space-y-2">
                  <CardTitle className="text-xl font-extrabold text-gray-900 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span>{item.name}</span>
                  </CardTitle>

                  <CardDescription className="text-2xl font-bold text-secondary">
                    <span className="flex items-center">
                      <DollarSign className="w-6 h-6 mr-1" />
                      {formatPrice(item.price)}
                    </span>
                  </CardDescription>
                </div>
              </CardHeader>

              {/* Card Content (Components List) */}
              <CardContent className="p-4 border-t border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                  Composants Inclus :
                </h3>
                
                <div className='flex flex-row'>
                  <ComposantComponent  item={item}  />
                  </div> 
              </CardContent>

              {/* Card Footer (Action and Warranty) */}
              <CardFooter className="flex flex-col p-4 pt-0">
                <CardAction className="w-full">
                  {/**Gerer dynamaique la category */}
                  <Button className="text-white px-4 py-2 rounded-full hover:bg-secondary/90 transition w-full" size={"lg"}>
                   <Link href={`/store/category/solar/kit/${item.id}`}>Commander ce kit </Link> 
                  </Button>
                </CardAction>

                <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center space-x-1">
                  <span className="font-medium text-green-600">
                    Garantie Totale!
                  </span>
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


export const ComposantComponent = ({ item }: { item: SolarKit }) => {
  const { kitId }: { kitId: string } = useParams();
  console.log(kitId);
  const id = parseInt(kitId);
  return (
    <ul className={clsx("gap-2", {
      "flex flex-row gap-4 mx-auto flex-wrap": kitId
    })}>
      {Object.entries(item.components).map(([key, value]) => (
        <li
          key={key}
          className={clsx('flex items-start text-sm text-gray-600', {
            'flex-col gap-4 border p-4 hover:scale-105 active:scale-105 transition-all': kitId,
          })}
        >
          <span className="flex-shrink-0 mr-2 mt-1">
            {GetComponentIcon(key)}
          </span>
          {/* --- Ligne Modifiée pour afficher la clé en Français --- */}
          <strong className="capitalize text-gray-900 mr-1">
            {GetComponentName(key)}:
          </strong>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};
export default Page;
