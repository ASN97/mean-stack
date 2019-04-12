var net = require('net');

var readline = require('readline-sync');
var HOST = '127.0.0.1';
var PORT = 6969;
var standard_input = process.stdin;
var client = new net.Socket();
standard_input.setEncoding('utf-8');
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    var name = readline.question("Enter data?");
    console.log('Enter your data');

    client.write(name);

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    // Close the client socket completely
    client.destroy();
    
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});