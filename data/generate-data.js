// generate applications with Faulkner

import { faker } from "@faker-js/faker";

import * as fs from "fs";

var DATA = [];

var JOBS = [
    "Server",
    "Chef",
    "Cook",
    "Dishwasher",
    "Bouncer",
    "Receptionist",
    "Childcare",
    "Phlebotomist",
    "Home Health Aide",
    "Security",
];

for (var i = 1; i < 100; i++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var name = `${firstName} ${lastName}`;
    var randJob = getRandomInt(JOBS.length);
    var position = JOBS[randJob];
    var appDate = faker.date.recent(45);
    var applied = appDate.toLocaleDateString();
    var experience = getWeightedRandomInt(3) + 1;
    var availability = getAvailability();
    var questions = getQuestions();

    var record = {
        id: i,
        name: name,
        position: position,
        applied: applied,
        experience: experience,
        availability: availability,
        questions: questions,
    };

    DATA.push(record);
}

var jsonData = JSON.stringify(DATA, null, 4);
fs.writeFile("data.json", jsonData, function (err) {
    if (err) {
        console.log(err);
    }
});

function getRandomInt(max) {
    var result = null;
    if (max == 0) {
        result = 0;
    } else if (max == 1) {
        var rnd = Math.random();
        result = rnd < 0.5 ? 0 : 1;
    } else {
        result = Math.floor(Math.random() * max);
    }
    return result;
}

function getWeightedRandomInt(max) {
    var result = null;
    if (max == 0) {
        return 0;
    }

    for (var ii = 0; ii < max; ii++) {
        result += getRandomInt(1);
    }
    return result;
}

function getAvailability() {
    var result = {};

    var days = ["M", "T", "W", "Th", "F", "S", "Su"];

    var daysAvail = 0;
    for (var ii = 0; ii < days.length; ii++) {
        if (daysAvail > 5) {
            continue;
        }
        var day = days[ii];
        var avail = getWeightedRandomInt(3) - 1;
        if (avail < 0) {
            avail = 0;
        } else if (avail > 2) {
            avail = 0;
        } else {
            daysAvail++;
        }
        result[day] = avail;
    }
    return result;
}

function getQuestions() {
    var result = [];

    // ask felony
    if (Math.random() > 0.5 ) {
        var answer = Math.random() < 0.15 ?  "Yes": "No";
        var obj = {
            text: "Have you ever been convicted of a felony?",
            answer: answer,
        };
        result.push(obj);
    }
    // ask auth work
    if (Math.random() > 0.5 ) {
        var answer = Math.random() < 0.15 ? "No" : "Yes";
        var obj = {
            text: "Are you authorized to work in the United States?",
            answer: answer,
        };
        result.push(obj);
    }
    return result;
}
