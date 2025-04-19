const BioData = (props) => {
  const { Name, Age, Phone, Occupation, Skills, Interset } = props;
  return (
    <div className="BioData">
      <div className="information">
        <h3> BioData of Name : {Name}</h3>
        <h3>Age : {Age} </h3>
        {Phone && <h3>Phone : {Phone} </h3>}
        <h3>Occupation : {Occupation} </h3>
      </div>
      <div className="skills">
        <h2>Skills........</h2>
        <ul>
          {Skills.map((skill) => (
            <li key={skill}> {skill}</li>
          ))}
        </ul>
      </div>
      <div className="Interset">
        <h2>Interest........</h2>
        <ul>
          {Interset.map((inter) => (
            <li key={inter}>{inter}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BioData;
