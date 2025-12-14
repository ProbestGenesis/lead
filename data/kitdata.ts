import kitsolar from '@/assets/kitSolar.png';
import { StaticImageData } from 'next/image';
export type KitComponentKey =
  | 'panel'
  | 'panels'
  | 'battery'
  | 'batteries'
  | 'regulator'
  | 'inverter'
  | 'bulbs'
  | 'television'
  | 'fan'
  | 'fans'
  | 'decoder'
  | 'bonus';

export type KitComponents = Partial<Record<KitComponentKey, string>>;

export interface SolarKit {
  id: number;
  name: string;
  price: number;
  currency: string;
  images: StaticImageData[];
  components: KitComponents;
}

export interface KitData {
  solar_kits: SolarKit[];
  warranty: string;
}

export const kitData: KitData = {
  solar_kits: [
    {
      id: 1,
      name: 'Kit solaire Mini',
      price: 220000,
      currency: 'FCFA',
      images: [kitsolar],
      components: {
        panel: '01',
        battery: '01',
        regulator: '01',
        inverter: '01',
        bulbs: '06',
        television: '01 (17 pouces)',
        decoder: '01 Kit Décodeur simple',
      },
    },
    {
      id: 2,
      name: 'Kit solaire pro',
      price: 300000,
      currency: 'FCFA',
      images: [kitsolar],
      components: {
        panel: '01',
        battery: '01',
        regulator: '01',
        inverter: '01',
        bulbs: '10',
        television: '01 (19 pouces)',
        fan: '01',
        decoder: '01 Kit Décodeur simple',
      },
    },
    {
      id: 3,
      name: 'Kit solaire pro max',
      price: 435000,
      currency: 'FCFA',
      images: [kitsolar],
      components: {
        panels: '02',
        battery: '01',
        regulator: '01',
        inverter: '01',
        bulbs: '12',
        television: '01 (24 pouces)',
        fan: '01',
        decoder: '01 Kit Décodeur canal+',
        bonus: "3 mois d'abonnement inclus",
      },
    },
    {
      id: 4,
      name: 'Kit solair ultra',
      price: 650000,
      currency: 'FCFA',
      images: [kitsolar],
      components: {
        panels: '04',
        batteries: '02',
        regulator: '01',
        inverter: '01',
        bulbs: '20',
        television: '01 (32 pouces)',
        fans: '02',
        decoder: '01 Kit Décodeur canal+',
        bonus: "3 mois d'abonnement inclus",
      },
    },
  ],
  warranty: 'Une garantie totale sur tous nos produits',
};
