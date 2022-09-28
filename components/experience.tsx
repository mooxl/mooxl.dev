const Milestone = (props: {
  title: string;
  role: string;
  date: string;
  list: string[];
}) => (
  <div>
    <div class="flex justify-between md:flex-col">
      <div class="md:order-2">
        <h4>{props.title}</h4>
        <h5>{props.role}</h5>
        <ul>
          {props.list.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <p class="flex-shrink-0 md:order-1 md:mb-0.2">{props.date}</p>
    </div>
  </div>
);
const Experience = () => (
  <>
    <h3>Erfahrung</h3>
    <div class="space-y-3 lg:space-y-2">
      <Milestone
        title="Ambient"
        role="Frontend Web Developer - Werksstudent"
        date="seit April 2022, Köln"
        list={[
          "Implementierung diverser Features in unterschiedlichen Codebasen",
          "Beheben von Bugs an abwechslungsreichen Diensten",
        ]}
      />
      <Milestone
        title="Mediaatrium GmbH"
        role="Full Stack Developer"
        date="Februar 2021 - März 2022, Laufach"
        list={[
          "Front- und Backend-Entwicklung mittels TypeScript im Rahmen verschiedener Projekte",
          "Überarbeitung der kompletten serverseitigen Infrastruktur via Docker",
          "Optimierung interner technischer Prozesse",
        ]}
      />
      <Milestone
        title="Curly UG"
        role="Mitgründer"
        date="Dezember 2019 - Februar 2021, Aachen"
        list={[
          "Konzeption und teilweise Umsetzung einer sozialen Foodsharing-Plattform mit Golang und Flutter",
          "Webentwicklung für eigene Website und verschiedene Kunden unter Becurly",
        ]}
      />
      <Milestone
        title="AStA FH Aachen"
        role="Front- und Backend Web Developer - Werksstudent"
        date="seit November 2018, Aachen"
        list={[
          "Entwicklung und Instandhaltung verschiedener Systeme in Node.js, Deno, Golang und Python",
          'Konzeption und Umsetzung der Wohnbörse "Zimmerfrei" der Uni Bonn',
          "Erweiterung der elektronischen Semesterticketrückerstattung",
        ]}
      />
    </div>
  </>
);
export default Experience;
