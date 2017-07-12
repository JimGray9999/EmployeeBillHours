// Initialize Firebase
var config = {
  apiKey: "AIzaSyBuS5HdbUwtidnPxA7CLaA5W18SiMW0Fmw",
  authDomain: "billable-hours-87d45.firebaseapp.com",
  databaseURL: "https://billable-hours-87d45.firebaseio.com",
  projectId: "billable-hours-87d45",
  storageBucket: "http://billable-hours-87d45.appspot.com",
  messagingSenderId: "473483339769"
};

firebase.initializeApp(config);

// initial variables
var database = firebase.database();
// TODO: variables for the 4 fields to capture



// on value function
database.on("value", function(snapshot) {
	console.log(snapshot.val());
});


// on click function
//TODO: add the id for the button
$("#").on("click", function() {
	// 

	database.ref().push(){

	}
});