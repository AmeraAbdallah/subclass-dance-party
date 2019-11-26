var fatima = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fatima">Fatima</span>')


}

fatima.prototype = Object.create(makeDancer.prototype);
fatima.prototype.constructor = fatima;


fatima.prototype.step = function(){

makeDancer.prototype.step.call(this);

this.$node.animate({
   top : $("body").height() * Math.random(),
 	left : $("body").width() * Math.random()
  }, 1000);
}