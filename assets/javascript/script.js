// Initialize Firebase
// add your API and config info from Firebase here
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

// initial variables
var database = firebase.database();
var empName = "";
var empRole = "";
var empStart = "";
var empRate = "";
var months = '';
var billed = 0;


// on value function
database.ref().on("value", function(snapshot) {
	console.log(snapshot.val());
});

database.ref().on("child_added", function(snapshot) {
	console.log("children: ", snapshot.key);

	var sv = snapshot.val();

	// months = difference of months from empStart to now
	months = 0 - moment(sv.empStart, "DD/MM/YY").diff(moment(),"months");
	console.log(months);

	// billed = empRate * months
	billed = parseInt(sv.empRate) * parseInt(months);
	console.log(sv.empRate);
	console.log(billed);

	$("#empTable").append("<tr><td>" + sv.empName +
	"</td><td>" + sv.empRole +
	"</td><td>" + sv.empStart + 
	"</td><td>" + months + " months" +  
	"</td><td>" + "$" + sv.empRate +
	"</td><td>" + "$" + billed +  "</tr>");

});

// on click function
$("#submitBtn").on("click", function() {
	// 
	empName = $("#empNameForm").val().trim();
	empRole = $("#empRoleForm").val().trim();
	empStart = $("#startDateForm").val().trim();
	empRate = $("#rateForm").val().trim();

	database.ref().push({
		empName: empName,
		empRole: empRole,
		empStart: empStart,
		empRate: empRate
	});
});
