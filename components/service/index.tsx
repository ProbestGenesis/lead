"use client"
import {
  CheckCircle2,
  Zap,
  Lightbulb,
  ShieldCheck,
  Home,
  Phone,
  Mail,
  MapPin,
  Menu,
  Clock,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
function Services() {
  return (
    <section id="services" className="py-24 bg-light-gray relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

      <div className="container mx-auto  px-4 md:px-6 relative z-10">
        <div className=" mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Nos Domaines d'Intervention
          </h2>
          <div className="h-1 w-20 bg-secondary  rounded-full" />
          <p className="text-gray-600 max-w-2xl  text-left text-lg">
            Des solutions complètes adaptées aux particuliers et professionnels,
            réalisées dans le respect strict des normes en vigueur.
          </p>
        </div>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Lightbulb className="h-8 w-8 mx-auto text-white" />}
            title="Installation"
            description="Installation électrique complète pour neuf et rénovation. Pose de tableaux, prises, et éclairages LED basse consommation."
            delay={0}
          />
          <ServiceCard
            icon={<Zap className="h-8 w-8 mx-auto text-white fill-current" />}
            title="Dépannage"
            description="Intervention d'urgence pour pannes de courant, courts-circuits et dysfonctionnements. Diagnostic précis et réparation rapide."
            delay={100}
            highlight
          />
          <ServiceCard
            icon={<ShieldCheck className="h-8 w-8 mx-auto text-white" />}
            title="Mise aux normes"
            description="Mise en sécurité de votre installation selon la norme NF C 15-100. Diagnostic complet et remplacement de tableaux."
            delay={200}
          />
          <ServiceCard
            icon={<Home className="h-8 w-8 mx-auto text-white" />}
            title="Domotique"
            description="Maison connectée : pilotage à distance du chauffage, des volets et de l'éclairage pour plus de confort et d'économies."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}


function ServiceCard({
  icon,
  title,
  description,
  highlight = false,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
  delay?: number;
}) {
  return (
    <Card
      className={`border-none shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group overflow-hidden ${
        highlight ? 'bg-primary text-white' : 'bg-white'
      }`}
    >
      <CardHeader className="text-center pb-2 relative z-10">
        <div
          className={` w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4 transition-transform duration-500 group-hover:rotate-6 ${
            highlight ? 'bg-white/20 text-white' : 'bg-primary text-white'
          }`}
        >
          {icon}
        </div>
        <CardTitle
          className={`text-xl font-bold transition-colors ${
            highlight ? 'text-white' : 'text-gray-900 group-hover:text-primary'
          }`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center relative z-10">
        <CardDescription
          className={`leading-relaxed text-left mx-auto ${
            highlight ? 'text-blue-100' : 'text-gray-600'
          }`}
        >
          {description}
        </CardDescription>
      </CardContent>
      {/* Decorative background circle */}
      <div
        className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${
          highlight ? 'bg-blue-600/60' : 'bg-blue-700/80'
        }`}
      />
    </Card>
  );
}

export default Services