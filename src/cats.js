var cat = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class= "cat" src= "https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwih89uPgYbmAhUyIMUKHWZxD38QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.lanaicatsanctuary.org%2F&psig=AOvVaw17Yfff0vxXD0TWErQ7FNgm&ust=1574793510481041">');

}

cat.prototype = Object.create(makeBlinkyDancer.prototype);
cat.prototype.constructor = cat;

cat.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   console.log(this.$node);
}