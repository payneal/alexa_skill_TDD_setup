const alexaTest = require('alexa-skill-test-framework');

alexaTest.initialize(
    require("../index.js"),
    "amzn1.ask.skill.52efe7e1-3fec-42de-8287-f7fe73fd9e23",
    "amzn1.ask.account.VOID");

describe("Example of testing", () => {
    'use strict';

    describe("LaunchRequest", () => {
        alexaTest.test([
            {
                request: alexaTest.getLaunchRequest(),
                says: "What test name would you like to use?",
                repromptsNothing: false, 
                reprompts: "Test Name?",
                shouldEndSession: false
            }
        ]);
    });

    describe("", () => {
        const slot = {'Test': 'me'};
        const request_with_slot = alexaTest.getIntentRequest('Ali', slot);
        alexaTest.test([
            {
                request: request_with_slot,
                says: "whats good",
                    repromptsNothing: true, shouldEndSession: true
            }
        ]);
    });
});
