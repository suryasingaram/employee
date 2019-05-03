
// Bring Mongoose into the app
var mongoose = require('mongoose');

mongoose.connect("mongodb://kajendran:kaja123@ds015869.mlab.com:15869/shopping")
//mongoose.connect('mongodb://localhost:27017/empolyee');

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.info('Mongoose default connection open to ' + "shopping db");
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.info('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.info('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.info('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

