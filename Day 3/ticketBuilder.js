function ticketBuilder (transport) {
  return function (name) {
    console.log("Welcome, " + name + ". Here's your ticket for the " + transport);
  }
}

var getPlaneTicket = ticketBuilder("plane");
var getPlaneTicket = ticketBuilder("train");

getPlaneTicket("Jonh Smith");
getPlaneTicket("Patty Bishop");
