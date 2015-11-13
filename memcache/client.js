var simplecached = require('simplecached');

var options = {
  port: 11312,
  host: 'localhost'
};

var client = new simplecached.Client(options, function(error) {
  console.log('Connected');
});


client.set("name", "gonzalo", function(error, response){
  console.log(response);
  client.get("name", function(error, value){
    console.log(value);
  })
});
