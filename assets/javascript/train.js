$(document).ready(function() {
// Initialize Firebase
var config = {
apiKey: "AIzaSyBoHxMoxZGMttljXvEhZtDMuMy4EiHp_jA",
authDomain: "classapp-fa23d.firebaseapp.com",
databaseURL: "https://classapp-fa23d.firebaseio.com",
projectId: "classapp-fa23d",
storageBucket: "",
messagingSenderId: "1042086065264"
};


firebase.initializeApp(config);

var database = firebase.database();


var trainName = "";
var destination = "";
var frequency = 0;
var nextArrival = "";
var minutesAway = 0;
var firstTrain = "";

$("#add-train").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    
    trainName = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    firstTrain = $("#first-input").val().trim();

    database.ref().push({
      trainName: trainName,
      destination: destination,
      frequency: frequency,
      firstTrain: firstTrain, // first part is child of database. after : is the value.
    });

    console.log(trainName);
    console.log(destination);
    console.log(frequency);
    console.log(firstTrain);

  });

});

