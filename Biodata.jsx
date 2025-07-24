function Biodata(obj) {
  console.log("Hello from Biodata Component");
  return (
    <>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi totam
          facilis laboriosam cupiditate, perspiciatis sequi exercitationem
          veniam quam non ullam.
        </p>
        <h1>Biodata of {obj.name}</h1>
        <h3>Age : {obj.age}</h3>
        <p>Occaputation : {obj.occupation}</p>
        {obj.mobile && <p>Mobile : {obj.mobile}</p>}
        <div>
          <h3>Hobbys Are : </h3>
          <ul>
            {obj.hobby.map((hobbys) => (
              <li key={hobbys}>{hobbys}</li>
            ))}
          </ul>
        </div>
        <h3>Skills Are : </h3>

        <h4>Hello</h4>
        <ul>
          {obj.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Biodata;
