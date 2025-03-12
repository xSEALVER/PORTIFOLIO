// import React from "react";

// const SioComp = () => {
//   return (
//     <div className="flex w-full items-center h-full">
//       {/* First Card */}
//       <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-1/2 p-4 m-2">
//         <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
//           <span className="text-sm text-slate-600 font-medium">BTS SIO option SLAM</span>
//         </div>
//         <div className="p-4">
//           <h5 className="mb-2 text-slate-800 text-xl font-semibold">
//             Website Review Check Update from Our Team in San Francisco
//           </h5>
//           <p className="text-slate-600 leading-normal font-light">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis suscipit incidunt ducimus, modi officia eveniet alias exercitationem obcaecati, placeat quam in itaque mollitia adipisci aperiam. Ab magnam rerum suscipit.
//             Dolores consequatur dolorum, facilis enim sit earum molestias ex obcaecati quam nisi repellendus dolorem minima fugit ab quisquam iure, fugiat voluptatem laboriosam! Esse, expedita perspiciatis fugit officiis dignissimos distinctio similique!
//             Suscipit obcaecati quibusdam sed tempora adipisci voluptatibus aperiam nisi fugiat expedita dolore autem repellat corporis quidem nobis, asperiores error repudiandae, et unde quam dolor soluta quis enim? Consequatur, earum ipsa!
//             Ut, nemo velit consectetur odio voluptas vero unde adipisci at? Ea unde repudiandae quidem, cumque odio ratione cum et quibusdam, aperiam voluptatum fugit alias rem dolorem aliquam enim ullam magnam.
//             Itaque vitae saepe labore exercitationem dignissimos. Error ipsam expedita amet tenetur ea totam dicta vitae, iure alias quibusdam dolorum voluptas saepe obcaecati iste corrupti quasi facilis sit molestiae, non distinctio.
//             Dolorum facilis fugiat perspiciatis porro laborum. Sed, consectetur molestiae. Cupiditate dolore, optio impedit accusamus culpa assumenda laboriosam porro quas sint pariatur incidunt, eos commodi! Natus nihil dicta esse sunt quod.

//           </p>
//         </div>
//       </div>

//       {/* Second Card */}
//       <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-1/2 p-4 m-2">
//         <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
//           <span className="text-sm text-slate-600 font-medium">BTS SIO option SISR</span>
//         </div>
//         <div className="p-4">
//           <h5 className="mb-2 text-slate-800 text-xl font-semibold">
//             Latest Update on the Product from Our Team in New York
//           </h5>
//           <p className="text-slate-600 leading-normal font-light">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis suscipit incidunt ducimus, modi officia eveniet alias exercitationem obcaecati, placeat quam in itaque mollitia adipisci aperiam. Ab magnam rerum suscipit.
//             Dolores consequatur dolorum, facilis enim sit earum molestias ex obcaecati quam nisi repellendus dolorem minima fugit ab quisquam iure, fugiat voluptatem laboriosam! Esse, expedita perspiciatis fugit officiis dignissimos distinctio similique!
//             Suscipit obcaecati quibusdam sed tempora adipisci voluptatibus aperiam nisi fugiat expedita dolore autem repellat corporis quidem nobis, asperiores error repudiandae, et unde quam dolor soluta quis enim? Consequatur, earum ipsa!
//             Ut, nemo velit consectetur odio voluptas vero unde adipisci at? Ea unde repudiandae quidem, cumque odio ratione cum et quibusdam, aperiam voluptatum fugit alias rem dolorem aliquam enim ullam magnam.
//             Itaque vitae saepe labore exercitationem dignissimos. Error ipsam expedita amet tenetur ea totam dicta vitae, iure alias quibusdam dolorum voluptas saepe obcaecati iste corrupti quasi facilis sit molestiae, non distinctio.
//             Dolorum facilis fugiat perspiciatis porro laborum. Sed, consectetur molestiae. Cupiditate dolore, optio impedit accusamus culpa assumenda laboriosam porro quas sint pariatur incidunt, eos commodi! Natus nihil dicta esse sunt quod.

//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SioComp;

import React, { useState } from "react";
import { motion } from "framer-motion";

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <motion.p
        className="text-slate-600 leading-normal font-light overflow-hidden"
        initial={{ height: "3rem" }}
        animate={{ height: isExpanded ? "auto" : "6rem" }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.p>
      <button
        className="text-white mt-2 bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read Less" : "Read More"}
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

const SioComp = () => {
  const SLAM = `L’option SLAM (Solutions Logicielles et Applications Métier) du BTS SIO est destinée aux étudiants souhaitant se spécialiser dans le développement d’applications et la gestion des logiciels d’une entreprise. Elle forme des professionnels capables de concevoir, développer et maintenir des solutions informatiques adaptées aux besoins des organisations.

Au cours de cette formation, les étudiants acquièrent des compétences en programmation, gestion de bases de données, développement web et mobile, ainsi qu’en analyse des besoins clients pour proposer des applications efficaces et sécurisées. Ils apprennent à utiliser divers langages et frameworks tels que Java, JavaScript, Python, PHP, SQL, React ou encore Laravel, afin de créer des logiciels performants.

L’option SLAM forme également les étudiants à la gestion de projet informatique, en leur enseignant les méthodes de développement comme l’AGILE ou le SCRUM. Ils développent ainsi une approche professionnelle leur permettant de travailler efficacement en équipe et de s’adapter aux évolutions technologiques du secteur.`;

  const SISR = `L’option SISR (Solutions d’Infrastructure, Systèmes et Réseaux) du BTS SIO est spécialement conçue pour les étudiants souhaitant s’orienter vers les métiers liés à l’administration et à la gestion des infrastructures informatiques. Elle vise à former des professionnels compétents dans la mise en place, la maintenance et la sécurisation des systèmes et réseaux d’une entreprise.

Grâce à cette formation, les étudiants acquièrent des compétences techniques avancées leur permettant de concevoir, déployer et administrer des infrastructures informatiques adaptées aux besoins des organisations. Ils apprennent à gérer des serveurs, configurer des équipements réseau (routeurs, switchs, pare-feu), et assurer la protection des données à travers des stratégies de cybersécurité.

De plus, l’option SISR prépare les futurs professionnels à travailler avec des technologies modernes comme la virtualisation, le cloud computing et la supervision des systèmes afin d’optimiser la performance et la sécurité des réseaux informatiques.`;

  return (
    <div className="flex w-full items-center h-full py-20 px-8">
      {/* First Card */}
      <div className="relative flex flex-col bg-transparent shadow-sm border border-gray-40 rounded-lg w-1/2 p-4 m-2">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm text-violet-600 font-medium">
            BTS SIO option SLAM
          </span>
        </div>
        <div className="p-4">
          <h5 className="mb-2 text-violet-600 text-xl font-semibold">
            Qu'est-ce que l'option SLAM ?{" "}
          </h5>
          <ExpandableText text={SLAM} />
        </div>
      </div>

      {/* Second Card */}
      <div className="relative flex flex-col bg-transparent shadow-sm border border-gray-40 rounded-lg w-1/2 p-4 m-2">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm text-violet-600 font-medium">
            BTS SIO option SISR
          </span>
        </div>
        <div className="p-4">
          <h5 className="mb-2 text-violet-600 text-xl font-semibold">
            Qu'est-ce que l'option SISR ?{" "}
          </h5>
          <ExpandableText text={SISR} />
        </div>
      </div>
    </div>
  );
};

export default SioComp;
