function Fruit() {
//make a variable for x and y
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() * rows - 1) + 1)* scale;

  this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

  }

  this.draw = function(){
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}
