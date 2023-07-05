var x = 10;
function outer() {
  var y = 20;
  function inner(z) {
    var result = x + y + z;
    console.log(result);
  }
  inner(30);
}
outer();
