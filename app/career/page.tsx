import React from 'react';
import {
  Users,
  BookOpen,
  Clock,
  MapPin,
  ArrowRight,
  Briefcase,
  Link2Icon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const BenefitCard: React.FC<BenefitProps> = ({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}) => (
  <div className="bg-white p-8 rounded-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
    <div
      className={`w-14 h-14 rounded-lg ${bgColor} flex items-center justify-center mb-6`}
    >
      <div className={`${iconColor} w-7 h-7`}>{icon}</div>
    </div>
    <h3 className="font-bold text-lg mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
  </div>
);

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  offerLink: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  type,
  description,
  offerLink,
}) => (
  <article className="bg-white p-8 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-2xl text-wrap max-sm:w-42 font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 flex items-center gap-2 mt-3">
          <MapPin className="w-4 h-4 flex-shrink-0 text-blue-600" /> {location}
        </p>
      </div>

      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap ml-4">
        {type}
      </span>
    </div>

    <p className="text-gray-700 grow leading-relaxed text-base">
      {description}
    </p>

    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
      <Link
        href={offerLink}
        className=""
      >
        <Button size={"lg"} className="flex flex-row space-w-4 text-white hover:bg-blue-600">
          Voir le Poste
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
        
      </Link>
    </div>
  </article>
);

interface InternshipCardProps {
  title: string;
  field: string;
  duration: string;
  description: string;
  offerLink: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  field,
  duration,
  description,
  offerLink,
}) => (
  <article className="bg-white p-8 rounded-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 mt-3">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Briefcase className="w-4 h-4 shrink-0 text-green-600" /> {field}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0 text-green-600" /> {duration}
          </p>
        </div>
      </div>
      <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full whitespace-nowrap ml-4">
        Stage
      </span>
    </div>

    <p className="text-gray-700 grow leading-relaxed text-base">
      {description}
    </p>

    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
      <Link href={offerLink}>
        <Button
          size={'lg'}
          className="flex flex-row space-w-4 text-white hover:bg-green-600"
        >
          Postuler Maintenant
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </article>
);

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-gray-100">
      {/* Navigation accent line */}
      <div className="h-1 bg-linear-to-r from-blue-600 to-blue-400"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <header className="py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
              CARRIÈRES
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              Construire l'Avenir de l'Énergie Solaire
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
              Nous concevons et déployons des solutions solaires qui
              autonomisent les communautés et les entreprises du monde entier.
              Rejoignez notre mission pour accélérer la transition énergétique
              grâce à l'innovation, la collaboration et une croissance durable.
            </p>
          </div>
        </header>

        {/* Benefits Section */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              NOTRE ENGAGEMENT
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Pourquoi Rejoindre Notre Équipe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <BenefitCard
              icon={<BookOpen className="w-6 h-6" />}
              title="Formation Continue"
              description="Nous investissons dans votre croissance avec des formations régulières, des ateliers et des opportunités de mentorat."
              bgColor="bg-blue-50"
              iconColor="text-blue-600"
            />
            <BenefitCard
              icon={<Clock className="w-6 h-6" />}
              title="Horaires Flexibles"
              description="Équilibrez travail et vie privée avec des horaires flexibles et des options de travail à distance."
              bgColor="bg-green-50"
              iconColor="text-green-600"
            />
            <BenefitCard
              icon={<Users className="w-6 h-6" />}
              title="Focus sur l'Innovation"
              description="Travaillez sur des projets de pointe qui repoussent les limites de la technologie solaire."
              bgColor="bg-amber-50"
              iconColor="text-amber-600"
            />
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
              OPPORTUNITÉS
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Postes Disponibles
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Explorez des rôles où vous pouvez faire une réelle différence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <JobCard
              title="Gestionnaire Communautaire"
              location="Télétravail / Togo"
              type="Temps Plein"
              description="Responsable de l'engagement de notre communauté en ligne, de la sensibilisation à la marque et de la gestion du contenu social sur plusieurs plateformes."
              offerLink="/offer-cm"
            />
            <JobCard
              title="Commercial"
              location="Lomé / Sur le Terrain"
              type="Temps Plein"
              description="Développez des portefeuilles de clients, gérez les comptes clés et pilotez les ventes pour atteindre des objectifs ambitieux sur le terrain."
              offerLink="/offer-commercial"
            />
          </div>
        </section>

        {/* Internship Section */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="mb-16">
            <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
              DÉVELOPPEMENT PROFESSIONNEL
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Stages Disponibles
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Lancez votre carrière en énergie renouvelable avec nos programmes de stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <InternshipCard
              title="Stage en Ingénierie Solaire"
              field="Ingénierie"
              duration="3 à 6 mois"
              description="Participez à la conception et l'installation de systèmes solaires innovants. Travaillez aux côtés de nos ingénieurs pour développer vos compétences techniques en énergie renouvelable."
              offerLink="/offer-internship-engineering"
            />
            <InternshipCard
              title="Stage en Marketing & Communication"
              field="Marketing"
              duration="3 à 6 mois"
              description="Aidez-nous à développer nos stratégies de communication et de marketing. Participez à des campagnes numériques et renforcez notre présence sur les réseaux sociaux."
              offerLink="/offer-internship-marketing"
            />
            <InternshipCard
              title="Stage en Gestion de Projet"
              field="Opérations"
              duration="3 à 6 mois"
              description="Supportez nos équipes dans la gestion de projets solaires. Apprenez les meilleures pratiques en coordination de chantiers et suivi administratif."
              offerLink="/offer-internship-project"
            />
            <InternshipCard
              title="Stage en Développement Commercial"
              field="Ventes"
              duration="3 à 6 mois"
              description="Contribuez à la prospection commerciale et au développement de partenariats. Acquérez une expérience précieuse en vente et gestion de clients."
              offerLink="/offer-internship-commercial"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 border-t border-gray-200">
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-12 md:p-16 shadow-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                Vous ne trouvez pas votre rôle?
              </h3>
              <p className="text-blue-100 mb-10 leading-relaxed text-lg">
                Nous recherchons toujours des individus talentueux qui partagent
                notre vision. Envoyez-nous votre profil et nous le garderons à
                l'esprit pour les opportunités qui correspondent à vos
                compétences et ambitions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-50 font-bold text-lg transition-all duration-200 hover:shadow-xl group/cta"
              >
                Envoyez Votre Profil
                <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer accent */}
      <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 mt-20"></div>
    </div>
  );
}
