// const redColor = document.querySelector(".red");

// redColor.addEventListener( "click", () => {
//       const backgroundChange = document.getElementById("body");
//       backgroundChange.style.backgroundColor = "#d63031";
// })

// const BlueColor = document.querySelector(".blue");

// BlueColor.addEventListener( "click", () => {
//       const backgroundChange = document.getElementById("body");
//       backgroundChange.style.backgroundColor = "#0984e3";
// })

// const greenColor = document.querySelector(".green");

// greenColor.addEventListener( "click", () => {
//       const backgroundChange = document.getElementById("body");
//       backgroundChange.style.backgroundColor = "#27ae60";
// })

// const pinkColor = document.querySelector(".pink");

// pinkColor.addEventListener( "click", () => {
//       const backgroundChange = document.getElementById("body");
//       backgroundChange.style.backgroundColor = "#ff7675";
// })

const allList = document.querySelectorAll("li");
const Body = document.getElementById("body");

allList.forEach( function (el) {
      el.addEventListener( "click" , function () {
        let className = this.classList[0];
        let color = "";
        if( className === "red" ){
            color = "#d63031";
        }
        if( className === "blue" ){
            color = "#0984e3";
        }
        if( className === "green" ){
            color = "#27ae60";
        }
        if( className === "pink" ){
            color = "#ff7675";
        }
        Body.style.backgroundColor = color;
      })
})