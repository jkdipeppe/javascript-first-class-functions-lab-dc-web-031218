function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(mult) {
  return function(num) {
    return num * mult
  };
}

var doubler = createMultiplier(2);
var doublerWithBind = multiplier.bind(2 , null );
var tripler = createMultiplier(3);
var triplerWithBind = multiplier.bind(3, null);

function multiplier(a,b) {
  return a * b
 }
