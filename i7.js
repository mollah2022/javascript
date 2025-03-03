function isValue(){
      fetch(`https://randomuser.me/api/`)
      .then( (data1) => {
        return data1.json();
      })
      .then( (data) => {
           console.log(data);
      })
      .catch( () => {
        console.log("NO Data Found");
      });
}
isValue();