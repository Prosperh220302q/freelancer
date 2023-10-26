
const typeAnimation = document.getElementById("typeAnimation");

const positionText = [
  "_I'm a Web Developer_",
  "_I'm a Mobile App Developer_",
  "_I'm a Music Producer_",
];

let i = 0;
let j = 0;
let k = 0;

setInterval(() => {
  if (j < positionText[i].length) {
    typeAnimation.innerHTML += positionText[i][j];
    j++;
  } else if (k < positionText[i].length) {
    typeAnimation.innerHTML = typeAnimation.innerHTML.slice(0, -1);
    k++;
  } else {
    j = 0;
    k = 0;
    i = (i + 1) % positionText.length;
  }
}, 200); // Adjust the time interval to control the speed of typing