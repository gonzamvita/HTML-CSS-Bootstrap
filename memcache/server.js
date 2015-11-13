var net = require('net');
var port = 11312;
var datos = {};

var server = net.createServer(function(connection) {
    console.log('Connection to %s open', port);

    connection.on('data', function(data) {
        var data_arr = String(data).trim().split(" ");
        var command = data_arr[0].toUpperCase();
        var key;

        if (command == "SET") {
            key = data_arr[1];
            datos[key] = data_arr[2];
            connection.write("STORED\r\n")
        } else if (command == "GET") {
            key = data_arr[1];
            var value = datos[key]
            connection.write("VALUE " + value + "\r\n")
        }
    });
});

server.listen(port);
