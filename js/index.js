var el = document.getElementById('c');
var ctx = el.getContext('2d');
var isDrawing;
var isDrawing, points = [ ];



el.onmousedown = function(e) {
  isDrawing = true;
  ctx.strokeStyle = 'rgba(240,128,0,1)'
  ctx.lineWidth = 5;
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.moveTo(e.clientX, e.clientY);
  
};

el.ontouchstart = function(e){
  isDrawing = true;
  ctx.strokeStyle = 'rgba(240,128,0,1)'
  ctx.lineWidth = 7;
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.moveTo(e.clientX, e.clientY);
};

el.onmousemove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  
};

el.ontouchmove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.touches[0].clientX,
       e.touches[0].clientY);
    ctx.stroke();
  }
};

el.onmouseup = function() {
  isDrawing = false;
};

el.ontouchend = function() {
  isDrawing = false;
};

function limpar(){
  
ctx.clearRect(0,0,1350,1400);
ctx.beginPath()
}

function salvar(){
  
  document.getElementById("c").src = el.toDataURL();
  Canvas2Image.saveAsPNG('c');



}
