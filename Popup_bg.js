
const canvas3 = document.querySelector(".canvas3");
const ctx3 = canvas3.getContext("2d");
let cw3 = canvas3.style.width = document.querySelector(".doubledborder").clientWidth ;
let ch3 = canvas3.style.height = document.querySelector(".doubledborder").clientHeight;
var grd1 = ctx3.createRadialGradient(75, 50, 5, 90, 60, 100);
grd1.addColorStop(0, "#febe7c");
grd1.addColorStop(1, "#9c6e3f");
ctx3.strokeStyle = grd1
ctx3.lineWidth = 10
ctx3.scale(0.2,0.2)
drawShapeAfter(ctx3,-90,-40)

drawShapeAfter1(ctx3,-100,-40)
