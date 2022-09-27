import { motion } from "framer-motion";

const Project = (props: {
  link: string;
  domain: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer`}
    >
      <div className="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{props.domain}</h4>
        <p>{props.technologies}</p>
        {props.matteo && (
          <a
            className="hover:text-white"
            href="https://github.com/matteohoeren"
            target="_blank"
            rel="noopener"
          >
            gemacht mit Matteo
          </a>
        )}
      </div>
    </motion.div>
  </a>
);

const Projects = () => (
  <>
    <h3>Projekte</h3>
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <Project
        link="https://www.laufach.de"
        domain="laufach.de"
        technologies="Next.js, Tailwind CSS, Directus, MeiliSearch"
        from="#1dbde6"
        to="#f1515e"
        matteo={true}
      />
      <Project
        link="https://www.ansmann.tech"
        domain="ansmann.tech"
        technologies="Next.js, Tailwind CSS, AWS SES"
        from="#00ff87"
        to="#60efff"
      />
      <Project
        link="https://www.zimmerfrei-bonn.de"
        domain="zimmerfrei-bonn.de"
        technologies="Next.js, Tailwind CSS, Node.js, Fastify, Knex, PostgreSQL"
        from="#bf0fff"
        to="#cbff49"
      />
      <Project
        link="https://www.mediaatrium.de"
        domain="mediaatrium.de"
        technologies="Next.js"
        from="#696eff"
        to="#f8acff"
      />
      <Project
        link="https://www.zahnarzt-herti.ch"
        domain="zahnarzt-herti.ch"
        technologies="Next.js, Tailwind CSS, Localization, AWS SES"
        from="#a9ff68"
        to="#ff8989"
      />
      <Project
        link="https://www.breemo.de"
        domain="breemo.de"
        technologies="Nuxt.js, Strapi, Snipcart"
        from="#f6d5f7"
        to="#fbe9d7"
      />
      <Project
        link="https://www.raycast.com/mooxl"
        domain="Raycast"
        technologies="React"
        from="#334d50"
        to="#b5c6e0"
      />
      <Project
        link="https://www.genusswerkstatt-rothenbuch.de"
        domain="genusswerkstatt-rothenbuch.de"
        technologies="Next.js, Tailwind CSS"
        from="#84ffc9"
        to="#eca0ff"
        matteo={true}
      />
      <Project
        link="https://www.silas-schmitt.de"
        domain="silas-schmitt.de"
        technologies="Next.js, Tailwind CSS, AWS SES"
        from="#fbd07c"
        to="#b5c6e0"
        matteo={true}
      />
      <Project
        link="https://www.sfn-neumann.de"
        domain="sfn-neumann.de"
        technologies="Next.js, SCSS, Framer Motion"
        from="#ef709b"
        to="#fa9372"
      />
      <Project
        link="https://www.cube-manufacture.de"
        domain="cube-manufacture.de"
        technologies="Nuxt.js, SCSS"
        from="#9bafd9"
        to="#103783"
      />
      <Project
        link="https://www.freakademy.net"
        domain="freakademy.net"
        technologies="Next.js, Framer Motion"
        from="#e9b7ce"
        to="#d3f3f1"
      />
      <Project
        link="https://www.mr-werk-iserlohn.de"
        domain="mr-werk-iserlohn.de"
        technologies="Nuxt.js, SCSS"
        from="#42047e"
        to="#07f49e"
      />
      <Project
        link="https://www.sixthreeway.de"
        domain="sixthreeway.de"
        technologies="Next.js, Strapi"
        from="#f5e6ad"
        to="#f13c77"
      />
    </div>
  </>
);

export default Projects;
