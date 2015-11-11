console.log("Hello World")

function eat (food) {
  console.log('Eating some ' + food);
}

console.log(eat);

function eat2 (food) {
  if (food === "pizza") {
    console.log("Yay pizza!");
  } else if (food === "cookies") {
    console.log("Cookies are good too!")
  } else {
    console.log("Okey enjoy eating " + food)
  };
}

eat2 ("pizza")
eat2 ("cookies")
eat2 ("potatoes")
