function Snake() {
 //Part 1: Arrays
 // Changing x and y to arrays to be able to add more positions
 // The array will allow us to give the snake more length.
 this.x = [0];
 this.y = [0];
 this.xSpeed = scale * 1;
 this.ySpeed = 0;

 /******* Part 3: Losing ***************/
 this.lost = false;

 //Part 4 - Printing score
 this.score = 0;

 this.draw = function() {
   ctx.fillStyle = "#32a852";

   // ***** Part of part 1 *******
   for(i = 0; i < this.x.length; i++){
     ctx.fillRect(this.x[i], this.y[i], scale, scale);
   }
   /****************************** */

   /******* Part of Part 1 - Add the [0] for the array *******/
   if(this.x[0] > canvas.width){
     //Change this
     this.lost = true;
   }
   if(this.x[0] < 0){
     //Change this
     this.lost = true;
   }
   if(this.y[0] > canvas.height){
     //Change this
     this.lost = true;
   }
   if(this.y[0] < 0){
     //Change this
     this.lost = true;
   }

   /******************************************************* */

 };

 this.update = function() {
   /***** Part of part 1 ***********/
   for(i = this.x.length - 1; i > 0; i--) {
     this.x[i] = this.x[i - 1];
     this.y[i] = this.y[i - 1];
   }
   /***************************** */

   /***** Part of Part 1 - Add [0] in front of varaibles *******/
   this.x[0] += this.xSpeed;
   this.y[0] += this.ySpeed;
   /************************************************************/

   /***** Part of Part 3 *******/
   for(i = 1; i < this.x.length; i++) {
     if(this.x[0] === this.x[i] && this.y[0] === this.y[i]) {
       this.lost = true;
     }
   }
   /****************************/
 };

 this.changeDirection = function(direction) {
   if(direction === 'Up'){
     this.xSpeed = 0;
     this.ySpeed = -scale * 1;
   }else if(direction === 'Down'){
     this.xSpeed = 0;
     this.ySpeed = scale * 1;
   }
   else if(direction === 'Left'){
     this.xSpeed =  -scale * 1;
     this.ySpeed = 0;
   }else if(direction === 'Right'){
     this.xSpeed = scale * 1;
     this.ySpeed = 0;
   }
 }

 this.eat = function(fruit){
   /******** Part of Part 1 - Add [0] ************/
   if(this.x[0] === fruit.x && this.y[0] === fruit.y){
   /**********************************************/
     lastVal = this.x.length - 1;

     /******  Part 2 - Make the snake grow *******/
     this.x.push(this.x[lastVal]);
     this.y.push(this.y[lastVal]);
     /********************************************/

     //Add for Part 4
     this.score += 10;
     return true;
   } else {
     return false;
   }
 }

}
