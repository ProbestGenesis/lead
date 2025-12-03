import React from 'react';
import { ArrowRight, Sun, Zap, Leaf } from 'lucide-react';



function Newly() {
  const ArticleCard = ({ article }: { article: { image: string; title: string; date: string; summary: string } }) => (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-2">
      {/* Image Container */}
      <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).onerror = null;
            e.currentTarget.src = "https://placehold.co/800x450/f5f5f5/333?text=Article+Media";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-6 flex flex-col grow">
        {/* Date */}
        <span className="inline-block w-fit px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
          {article.date}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
          {article.summary}
        </p>

        {/* Button */}
        <button className="mt-auto py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group/btn">
          Lire la suite
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
        </button>
      </div>
    </div>
  );
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-2">
              Nouveautés à venir
            </h1>
            <p className="text-gray-600 text-lg">
              Découvrez les dernières tendances en construction durable
            </p>
          </div>

          {/* View All Button */}
          <button className="flex items-center space-x-2 py-3 px-6 bg-white border-2 border-gray-300 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:border-blue-600 transition duration-300 whitespace-nowrap shadow-sm hover:shadow-md">
            <span>Voir tout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <div className="mb-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-blue-600">Tendances clés</span> : Technologies qui transforment la construction avec un focus sur l'<span className="font-semibold">énergie solaire</span>, l'<span className="font-semibold">électricité intelligente</span> et la <span className="font-semibold">durabilité des matériaux</span>.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Articles would be mapped here */}
        </div>

        {/* Section I: Solar Energy */}
        <section className="mb-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 bg-green-100 rounded-lg">
              <Sun className="w-8 h-8 text-green-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-2">
                Révolution de l'Énergie Solaire Photovoltaïque
              </h2>
              <p className="text-green-700 font-medium">Technologie et innovation au service de l'énergie renouvelable</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            L'intégration du solaire dans l'architecture moderne devient la norme, allant au-delà des panneaux solaires classiques pour s'intégrer totalement aux structures des bâtiments. Des innovations telles que les tuiles solaires et les fenêtres photovoltaïques permettent aux bâtiments de générer leur propre énergie de manière esthétique et efficace.
          </p>

          {/* Solar Technologies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Tuiles et Bardeaux Solaires */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-105 flex flex-col h-full cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-green-200 to-green-300 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=300&fit=crop" alt="Tuiles Solaires" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col grow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Tuiles et Bardeaux Solaires</h4>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">Alternatives esthétiques qui remplacent directement les éléments de toiture traditionnels tout en produisant de l'électricité.</p>
                <button className="mt-4 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200 w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 2: Verre Solaire Transparent */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-105 flex flex-col h-full cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-300 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Verre Solaire" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col grow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Verre Solaire Transparent</h4>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">Transforme les fenêtres et les façades vitrées en surfaces productrices qui captent l'énergie solaire sans compromettre la luminosité intérieure.</p>
                <button className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 3: Cellules Solaires à Pérovskite */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-105 flex flex-col h-full cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-amber-200 to-amber-300 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742848-361c5dcb4ea7?w=400&h=300&fit=crop" alt="Cellules Pérovskite" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col grow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Cellules Solaires à Pérovskite</h4>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">Nouvelles technologies promettant des rendements énergétiques plus élevés et des coûts de production réduits comparé aux cellules traditionnelles en silicium.</p>
                <button className="mt-4 py-2 px-4 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition duration-200 w-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* Card 4: Panneaux Bifaciaux */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-105 flex flex-col h-full cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-cyan-200 to-cyan-300 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497440871051-a257648e377d?w=400&h=300&fit=crop" alt="Panneaux Bifaciaux" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex flex-col grow">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Panneaux Bifaciaux</h4>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">Capables de capter la lumière solaire des deux côtés, augmentant ainsi la production d'énergie de manière significative.</p>
                <button className="mt-4 py-2 px-4 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition duration-200 w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section II: Smart Electricity */}
        <section className="mb-12 p-8 bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-600 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 bg-yellow-100 rounded-lg">
              <Zap className="w-8 h-8 text-yellow-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-yellow-900 mb-2">
                Électricité Intelligente et Domotique
              </h2>
              <p className="text-yellow-700 font-medium">Smart Buildings pour une gestion optimisée de l'énergie</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Les systèmes électriques évoluent vers l'intelligence et l'interopérabilité, permettant une gestion optimisée de l'énergie et un confort accru pour les occupants. Les bâtiments intelligents réduisent la consommation énergétique tout en améliorant l'expérience utilisateur.
          </p>
        </section>

        {/* Section III: Sustainability */}
        <section className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg">
              <Leaf className="w-8 h-8 text-blue-700" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Durabilité des Matériaux
              </h2>
              <p className="text-blue-700 font-medium">Construction écologique et responsable</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            La sélection de matériaux durables et l'optimisation des processus de construction réduisent l'impact environnemental tout en améliorant la longévité des structures. Les innovations en matériaux bio-sourcés et recyclés deviennent la norme de demain.
          </p>
        </section>
      </div>
    </div>
  );
}
export default Newly;
