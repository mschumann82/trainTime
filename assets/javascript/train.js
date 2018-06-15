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

  
    
  database.ref().on("child_added", function(snapshot) { 
      var newRow = $("<tr>");

      // Add database data to table data elements
      var newTrain = $("<td>").text(snapshot.val().trainName);
      var newDestination = $("<td>").text(snapshot.val().destination);
      var newFrequency = $("<td>").text(snapshot.val().frequency);
      var newNextArrival = $("<td>").text(nextArrival);         
      var newMinutesAway = $("<td>").text(snapshot.val().minutesAway);
      

      // Add table data elements with database info to the table row
      newRow.prepend(newTrain, newDestination, newFrequency, newNextArrival, newMinutesAway);

      // Add the filled table row to the table
      $("#train-data").prepend(newRow);
    
   

  });







}); // end of document.ready

