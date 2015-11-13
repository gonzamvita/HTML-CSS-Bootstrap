// function shout () {
//  console.log("Aaaaaaaaaahhh!!!");
// }

// setTimeout(shout, 1000);

// function sleep(seconds, callback){
//   setTimeout(callback, seconds + 1000)
// }

// sleep(10, function() {
//   console.log("It's been 10 seconds");
// });


//---------------------------------------
function imprime(numero) {
  return function() {
    console.log(numero);
  }
};

function sleep(seconds, callback) {
  for (var i = seconds; i > 0; i--) {
    setTimeout(imprime(i), (seconds -i) * 1000)
  }
  setTimeout(callback, seconds * 1000);
};

sleep(10, imprime("boooooooom"));
