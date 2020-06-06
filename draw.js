const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.height / scale;

var snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();
  console.log(fruit)
  /*add this*/var myInterval = window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if(snake.eat(fruit)){
      fruit.pickLocation();
    }
    /*add this*/
    if(snake.lost) {
      console.log(snake.lost);
      clearInterval(myInterval);

      //Add for part 4
      console.log("Score:", snake.score);

      //******Extra Credit********
      var message = document.getElementById("FinalScore");
      message.innerHTML = "Score: " + snake.score;
      //*************************/
    }
    /*********/
  }, 120);

}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}))
