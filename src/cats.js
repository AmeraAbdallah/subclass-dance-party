var cat = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class= "cat" src= "https://media2.giphy.com/media/12HZukMBlutpoQ/giphy.gif">');
  this.$node.css({'width': '100px'})


}

cat.prototype = Object.create(makeDancer.prototype);
cat.prototype.constructor = cat;
// var x = -1

cat.prototype.step = function(){

makeDancer.prototype.step.call(this);

 	// this.setPosition($("body").height() * Math.random(),
  // 	$("body").width() * Math.random())
  this.$node.animate({
   top : $("body").height() * Math.random(),
 	left : $("body").width() * Math.random()
  }, 1000);


// x = x * -1
//  this.$node.css({'-webkit-transform': 'scaleX('+ x + ')',
//   'transform': 'scaleX(' + x + ')'})

}