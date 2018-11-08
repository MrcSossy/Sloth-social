function login() {
	var user = $("#user").val();
	var pass = $("#pass").val();

	var auth = {
		user: user,
		pass: pass
	};

	console.log("Requesting for authentication...");

	$.post("/validate", auth, function (data) {
		if (data === "OK") {
			console.log("Requesting gone well");
		}
		else {
			console.log("Requesting gone bad");
		}
	});
}
