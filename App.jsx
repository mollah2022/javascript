import Biodata from "./component/Biodata";
import Conditional from "./component/Conditional";
import ConditionalList from "./component/ConditionalList";
import RenderingList from "./component/RenderingList";

function App() {
  return (
    <>
      <Biodata
        name="John Doe"
        age={30}
        occupation="Software Engineer"
        mobile="123-456-7890"
        hobby={["Reading", "Traveling", "Gaming"]}
        skills={["JavaScript", "React", "Node.js"]}
      />
      <Biodata
        name="Jane Smith"
        age={28}
        occupation="Data Scientist"
        hobby={["Cooking", "Hiking", "Photography"]}
        skills={["Python", "Machine Learning", "Data Analysis"]}
      />
      <Biodata
        name="Alice Johnson"
        age={25}
        occupation="Graphic Designer"
        mobile="987-654-3210"
        hobby={["Drawing", "Painting", "Designing"]}
        skills={["Adobe Photoshop", "Illustrator", "UI/UX Design"]}
      />
      <Biodata
        name="Bob Brown"
        age={35}
        occupation="Project Manager"
        mobile="555-123-4567"
        hobby={["Running", "Cycling", "Swimming"]}
        skills={["Leadership", "Communication", "Agile Methodology"]}
      />
      <Biodata
        name="Charlie Green"
        age={40}
        occupation="System Administrator"
        mobile="444-987-6543"
        hobby={["Gaming", "Reading", "Traveling"]}
        skills={["Linux", "Networking", "Cloud Computing"]}
      />
      <Conditional isAdmin={true} isLoggedIn={true} isGuset={false} />

      <RenderingList />
      <>
        <ConditionalList isPacked={true} name="Sajib Ahmed" />
        <ConditionalList isPacked={false} name="Rajbir Ahmed" />
        <ConditionalList isPacked={true} name="Habib Ahmed" />
      </>
    </>
  );
}

export default App;
