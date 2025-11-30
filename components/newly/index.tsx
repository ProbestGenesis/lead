import React from 'react';
import{ArrowRight} from'lucide-react';
type Props = {};
function Newly({}: Props) {
   const ArticleCard = ({article}:{article: typeof article[0]}) =>(
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
      {/*Conteneur d'image*/}
      <div className="h-48 overflow-hidden">
        <img 
        src={article.image}
        alt={article.tiltle}
        className="w-full h-full object cover rounded-t-xl"
        onError={(e) => {
          e.currentTarget.onError = null;
          e.currentTarget.src = "https://placehold.co/800x450/f5f5f5/333?text=Aritcle+Media";
        }}
        />
        </div>

        <div className="p(5 flex flex-col flex-grow">
          {/*Date de publication*/}
          <p className="text-sm font semibold text-gray-500 mb-2">{article.date}</p>

          {/*Titre*/}
          <h3 className="text-xl font-extrabold text-gray-900 mb-3 leadind-snug fles-grow">
            {article.title}
          </h3>
          {/*Resume*/}
          <p className="text-gray-600 mb-4 text-sm">{article.summary} </p>

          {/*Bouton*/}
          <button className="mt-auto py-3 px-4 bg-yellow-400 text-black font-semibold rounded-lg 
          shadow-md hover:bg-yellow-500 transition duration-200">
            Lire la suite
          </button>
        </div>
    </div>
   );

  return (
  
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/*EN-tete de la section*/}
        <div className="flex justify-between items-center mb-10">
        <h1 className="tex-3xl sm:text-4xl font-extrabold text-black ">
          Nouveautés à venir...
        </h1>

        {/*Bouton "voir tout"*/}
        <button className="flex items-center space-x-2 py-é px-4 border 
        border-text-gray-300 rounde-full tex-sm font-medium text-gray-700
        hover:bg-gray-100 transition duration-200">
          <span>voir tout</span>
          <ArrowRight className="w-4 h-4"/>
        </button>

        {/*Grille des articles*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
        </div>
          
        <p className="text-gray-600 mb-8 italic text-lg">
          Tendances et technologies qui transformes la construction, en se en se
          concentrant sur l'énergie solaire, l'électricité intelligente et la
          durabilité des matériaux.
        </p>

        {/*Section I: Révolution de l'Energie Solaire*/}
        <section
          className="mb-10 p-5 border-1-4 border-green-600 bg-screen-50 rounded-lg transition
            duration-300 hover:shadow-md"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            I.Révolution de l'Energie Solaire Photovoltaïque
          </h2>
          <p className="text-gray-700 mb-4">
            L'intégration du solaire dans l'architecture moderne devient la
            norme, allant au-delà des panneaux solaires classiques pour
            s'intégrer totalement aux structures des bâtiments. Des innovations
            telles que les tuiles solaires et les fenêtres photovoltaïques
            permettent aux bâtiments de générer leur propre énergie de manière
            esthétique et efficace.
          </p>
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
            1. Photovoltaïque Intégré au Bâtiment (BIPV)
          </h3>
          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>
                 **Tuiles et Bardeaux Solaires** : Alternatives esthétiques qui remplacent directement
                 les éléments de toiture traditionnels tout en produisant de l'énergie(L'électricité).
            </li>
            <li>
                **Verre solaire transparent:** Permet de transformer les fenêtres et les façades vitrées
                en surfaces productrices qui captent l'énergie solaire sans compromettre la luminosité intérieure.   
                      </li>
        </ul>          
        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
            2. Technologies Cellulaires Avancées
        </h3>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>
                **Cellules solaires à pérovskite:**Nouvelles technologies promettant des rendements énergétiques
                 plus élevés et des coûts de production réduits par rapport aux cellules traditionnelles en silicium.
            </li>
            <li>
                **Panneaux Bifaciaux:** Capables de capter la lumière solaire des deux côtés, augmentant 
                ainsi la production d'énergie.
            </li>
        </ul>
        </section>

        {/*Section II: Electricité Intelligente et Domotique*/}
              <section className="mb-10 p-5 border-1-4 border yellow-600 bg-yellow-50 rounded-lg transitition
              duration-300 hover:shadow-md"> 
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            II. Electricité Intelligente et Domotique(Smart Buildings)
                </h2>        
            <p className="text-gray-700 mb-4">
                Les systèmes électriques évoluent vers l'intellgence et l'intéropérabilité, permettant une 
                gestion optimisée de l'énergie et un confort accru pour les occupants.
            </p>
        </section>
      </div>
   </div>
   </div>
  )
}
export default Newly;
