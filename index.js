

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(100,30);
ctx.lineTo(170, 100);
ctx.bezierCurveTo(173, 102, 182, 105, 180, 96)
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "green"
ctx.moveTo(105, 35);
ctx.quadraticCurveTo(160, 25, 200, 45);
ctx.quadraticCurveTo(170, 45, 175, 60);
ctx.quadraticCurveTo(170, 45, 105, 35);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle="yellow";
ctx.moveTo(105, 35);
ctx.quadraticCurveTo(170, 45, 175, 60)
ctx.quadraticCurveTo(140, 55, 142, 72);
ctx.lineTo(105,35)
ctx.fill();
ctx.stroke(); 

ctx.beginPath();
ctx.fillStyle = "blue"
ctx.moveTo(142, 72);
ctx.quadraticCurveTo(105, 65,105, 80);
ctx.quadraticCurveTo(50, 55, 105, 35);
ctx.fill();
ctx.stroke();

ctx.beginPath()
ctx.fillStyle = "red"
ctx.strokeStyle = 'black';
ctx.moveTo(105, 35);
ctx.quadraticCurveTo(80, 65, 105, 80);
ctx.quadraticCurveTo(80, 75, 75, 82);
ctx.quadraticCurveTo(50, 55, 105, 35);
ctx.fill();
ctx.stroke();
