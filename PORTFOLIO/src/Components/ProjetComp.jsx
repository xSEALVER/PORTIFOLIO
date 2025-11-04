import React from 'react';
import { FileText } from 'lucide-react';

export default function Realisation() {
  const missions = [
    {
      title: 'Client léger',
      image: 'https://via.placeholder.com/300x200/e2e8f0/64748b?text=img',
      technologies: 'Technologies utilisées',
    },
    {
      title: 'Client lourd',
      image: 'https://via.placeholder.com/300x200/e2e8f0/64748b?text=img',
      technologies: 'Technologies utilisées',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-8">
          <h1 className="bg-white text-violet-600 text-3xl font-bold px-12 py-4 rounded-2xl shadow-lg">
            Projets
          </h1>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-12 mx-4">
          <p className="text-gray-800 text-lg leading-relaxed">
            TP, projets et missions réalisés au cours des 2 années à l'école et au sein de l'entreprise,
            présentés sous forme de 'card' (au moins 6).
          </p>
        </div>

        {/* Mission Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {missions.map((mission, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 border-4 border-blue-800">
                {/* Title */}
                <div className="bg-white py-3 text-center border-b-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">{mission.title}</h3>
                </div>

                {/* Image placeholder */}
                <div className="bg-gray-100 h-48 flex items-center justify-center border-b-2 border-gray-200">
                  <div className="relative w-40 h-32 border-2 border-gray-400">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-600 text-2xl font-semibold">img</span>
                    </div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="#9ca3af" strokeWidth="1" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="#9ca3af" strokeWidth="1" />
                    </svg>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-white p-4 text-center">
                  <div className="border-2 border-gray-800 rounded px-4 py-2">
                    <p className="text-gray-900 font-medium">{mission.technologies}</p>
                  </div>
                </div>
              </div>

              {/* Documentation Button */}
              <button className="mt-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow-md border-2 border-gray-800 transition-colors flex items-center gap-2">
                <FileText size={18} />
                Bouton documentation
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}