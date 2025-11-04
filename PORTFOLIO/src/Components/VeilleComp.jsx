import React from 'react';

export default function VeilleTechnologique() {
  const tools = [
    {
      title: 'LinkedIn',
      description: "J'utilise LinkedIn pour suivre les avancées en informatique, découvrir les dernières recherches et projets, et rester connecté avec les experts du domaine.",
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      link: 'https://www.linkedin.com/in/stefan-brinzei-b48937279/',
    },
    {
      title: 'Pocket',
      description: "J'utilise Pocket pour sauvegarder et organiser les articles intéressants sur les nouvelles technologies, me permettant de les lire plus tard et de constituer une bibliothèque de ressources.",
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Pocket_Logo.svg/512px-Pocket_Logo.svg.png',
      link: 'https://getpocket.com/',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Veille technologique
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            La veille technologique est une pratique qui consiste à surveiller
            les évolutions d'un secteur pour maintenir ses compétences à jour et
            anticiper les changements.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sujet de ma veille
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              ratione alias amet mollitia ab earum odit sunt dolore ipsum.
              Fugiat, maiores saepe. Eaque asperiores placeat eius iste, quia,
              blanditiis accusantium dolor molestias voluptatum accusamus vitae
              optio, expedita sit itaque natus.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Mes outils</h2>
        </div>

        {/* Tools Cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-80 max-w-sm"
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6 flex flex-col h-64">
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {tool.title}
                </h5>
                <p className="text-gray-600 flex-1 mb-4">{tool.description}</p>
                <button
                  onClick={() => window.open(tool.link, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full"
                >
                  Voir plus d'articles
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}