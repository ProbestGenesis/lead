'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Zap,
  Award,
  Users,
  Heart,
  Target,
  Lightbulb,
  ShieldCheck,
  Clock,
  Truck,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="/professional-electrician-team-working-together.jpg"
              alt="Équipe d'électriciens professionnels"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-r bg-yellow-400 to-blue-900/40" />

          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-6 max-w-3xl  animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-flex items-center rounded-full border bg-yellow-400/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                <Award className="mr-2 h-4 w-4" />
                15 ans d'excellence
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Qui est <span className="block mt-2">LEAD CONSULTING?</span>
              </h1>
              <p className="text-lg text-gray-800 md:text-xl max-w-[650px] leading-relaxed">
                L'expert électrique de confiance pour les particuliers et
                professionnels Passion pour le métier, engagement envers la
                qualité.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-tl-3xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-br-3xl -z-10" />
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src=""
                    alt="Fondateurs d'ÉLECPRO"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold text-yellow-400">
                        15
                      </div>
                      <div className="text-sm font-medium uppercase tracking-wider border-l-2 border-white/30 pl-4">
                        Années d'histoire
                        <br />
                        et de passion
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
                  Notre Histoire
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Fondée sur la confiance et l'expertise
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  ÉLECPRO a été créée en 2010 par deux électriciens passionnés
                  ayant plus de 40 ans d'expérience combinée. Partant du constat
                  que l'électricité était souvent négligée par manque de temps
                  ou de connaissance, ils ont décidé de créer une entreprise
                  dédiée à la sécurité et au confort des familles et des
                  entreprises.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Aujourd'hui, avec une équipe de 12 électriciens certifiés et
                  une flotte de véhicules modernes, ÉLECPRO intervient chaque
                  jour pour améliorer la qualité de vie de plus de 500 clients
                  satisfaits. Notre croissance repose sur un principe simple :
                  écouter, comprendre et dépasser les attentes.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Équipe Expérimentée
                      </h4>
                      <p className="text-sm text-gray-500">
                        12 techniciens certifiés au service de votre confort
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <Star className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        500+ Clients
                      </h4>
                      <p className="text-sm text-gray-500">
                        Satisfaits et fidèles depuis plus de 10 ans
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-green-300">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Nos Valeurs Fondamentales
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Ce qui nous guide au quotidien dans chaque intervention
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 w-fit bg-blue-100 rounded-xl">
                    <ShieldCheck className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-gray-900">
                    Sécurité d'abord
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque intervention est réalisée dans le respect strict des
                    normes NF C 15-100. Votre sécurité n'est jamais une option,
                    c'est notre priorité absolue.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 w-fit bg-yellow-100 rounded-xl">
                    <Target className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-gray-900">
                    Excellence & Qualité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Nous utilisons uniquement du matériel de marque reconnue
                    (Legrand, Schneider, Hager) et nos techniques sont à la
                    pointe de l'innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 w-fit bg-green-100 rounded-xl">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">
                    Relation Client
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    À l'écoute de vos besoins, transparence totale, et
                    engagement de résultats. Vous êtes au cœur de nos décisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications & Expertise */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Certifications & Expertise
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Des qualifications reconnues qui garantissent votre tranquillité
                d'esprit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Qualifelec RGE
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Certification de qualité reconnue par l'État pour les
                      travaux d'électricité. Accès garanti aux aides
                      gouvernementales pour nos clients.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                      <CheckCircle2 className="h-5 w-5" />
                      Valide jusqu'en 2026
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600 flex-shrink-0">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Garantie Décennale
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Protection complète pendant 10 ans après l'intervention.
                      Assurance tous risques couvrant tous nos travaux.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                      <CheckCircle2 className="h-5 w-5" />
                      Incluse dans tous les devis
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Norme NF C 15-100
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Normes de sécurité électrique française. Tous nos
                      électriciens sont formés et à jour sur les dernières mises
                      à jour réglementaires.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                      <CheckCircle2 className="h-5 w-5" />
                      Formation continue
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600 flex-shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Partenaires Agréés
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Partenaires officiels Legrand, Schneider Electric, Hager,
                      et bien d'autres marques premium. Accès à du matériel de
                      qualité professionnelle.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                      <CheckCircle2 className="h-5 w-5" />
                      Garantie constructeur
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-linear-to-t from-pink-300/60 to-pink-300/10" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Notre Équipe
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                12 électriciens et techniciens passionnés prêts à vous servir
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Marc Dupont',
                  role: 'Fondateur & Électricien Principal',
                  exp: '25 ans',
                },
                {
                  name: 'Sophie Bernard',
                  role: 'Responsable Technique',
                  exp: '18 ans',
                },
                {
                  name: 'Julien Martin',
                  role: 'Électricien Domotique',
                  exp: '8 ans',
                },
                {
                  name: 'Claire Rodriguez',
                  role: 'Électricienne Installations',
                  exp: '12 ans',
                },
                {
                  name: 'Thomas Leclerc',
                  role: 'Électricien Dépannage',
                  exp: '6 ans',
                },
                {
                  name: 'Nathalie Fournier',
                  role: 'Gérant Commercial',
                  exp: '10 ans',
                },
                {
                  name: 'David Moreau',
                  role: 'Électricien Professionnel',
                  exp: '7 ans',
                },
                {
                  name: 'Emma Laurent',
                  role: 'Électricienne Confirmée',
                  exp: '5 ans',
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-blue-100 to-gray-200">
                    <Image
                      src={``}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{member.role}</p>
                    <p className="text-xs text-yellow-300 font-semibold">
                      {member.exp} d'expérience
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl -z-10" />

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl font-extrabold text-blue-600 mb-2">
                  15
                </div>
                <p className="text-gray-600 font-medium">Années d'expérience</p>
                <p className="text-sm text-gray-500 mt-2">Depuis 2010</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-extrabold text-yellow-500 mb-2">
                  500+
                </div>
                <p className="text-gray-600 font-medium">Clients satisfaits</p>
                <p className="text-sm text-gray-500 mt-2">En Île-de-France</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-extrabold text-green-600 mb-2">
                  12
                </div>
                <p className="text-gray-600 font-medium">
                  Techniciens certifiés
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Formés continuellement
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-extrabold text-purple-600 mb-2">
                  24/7
                </div>
                <p className="text-gray-600 font-medium">
                  Interventions d'urgence
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Toujours disponible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative">
          <div className="absolute inset-0  bg-linear-to-t from-blue-300/60 to-blue-300/10" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Pourquoi Choisir ÉLECPRO ?
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: 'Réactivité',
                  description:
                    "Intervention en 24h maximum. Dépannage d'urgence 7j/7 et 24h/24.",
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6" />,
                  title: 'Transparence',
                  description:
                    'Devis détaillé gratuit sans engagement. Prix clairs et honnêtes.',
                },
                {
                  icon: <ShieldCheck className="h-6 w-6" />,
                  title: 'Sécurité',
                  description:
                    'Respect strict des normes NF C 15-100 et garantie décennale incluse.',
                },
                {
                  icon: <Truck className="h-6 w-6" />,
                  title: 'Service Complet',
                  description:
                    "De l'installation à la domotique, tous vos besoins en un seul appel.",
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: 'Innovation',
                  description:
                    'Solutions modernes, domotique, énergie renouvelable, bornes recharge.',
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: 'Conseil Expert',
                  description:
                    'Recommandations personnalisées pour optimiser votre installation.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg h-fit flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Prêt à nous confier vos travaux électriques ?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Contactez-nous dès aujourd'hui pour une consultation gratuite.
                  Nos experts vous proposeront les meilleures solutions adaptées
                  à votre budget et vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="font-bold text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                  >
                    <Link href="/#contact" className="flex items-center gap-2">
                      Demander un devis
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    <Link href="/" className="flex items-center gap-2">
                      Retour à l'accueil
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10" />
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-6">
                    Contactez-nous
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg text-blue-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Appelez-nous
                        </p>
                        <a
                          href="tel:0123456789"
                          className="font-bold text-gray-900 hover:text-blue-600"
                        >
                          01 23 45 67 89
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg text-blue-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Écrivez-nous
                        </p>
                        <a
                          href="mailto:contact@elecpro.fr"
                          className="font-bold text-gray-900 hover:text-blue-600"
                        >
                          contact@elecpro.fr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-lg text-blue-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Adresse</p>
                        <p className="font-bold text-gray-900">
                          123 Avenue des Champs
                          <br />
                          75008 Paris
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
