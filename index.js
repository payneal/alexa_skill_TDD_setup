const Alexa = require("alexa-sdk");

const APP_ID = undefined;

var handlers = {
    'LaunchRequest': function() {
        this.emit(':ask', 'What test name would you like to use?', "Test Name?");
    },
    'Unhandlled': function() {
        this.emit(':tell', 'Sorry, I don\'t know what to do');
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', 'What can I help you with?', "How can I help?");
    },
    'Amazon.CancelIntent': function() {
        this.emit(':tell', 'Okay!');
    },
    'Amazon.StopIntent': function() {
        this.emit(":tell", "Goodbye");
    },
    'Ali': function() {
        this.emit(":tell", "whats good");
    },
};

exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
