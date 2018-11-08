function login() {
	var user = $("#user").val();
	var pass = $("#pass").val();

	const auth = {
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

function register() {
	var user = $("#user").val();
	var pass = $("#pass").val();
	var confirm = $("#confirm").val();

	console.log(user);
	console.log(pass);
	console.log(confirm);


	const auth = {
		user: user,
		pass: pass
	};

	if (pass == confirm) {
		// TODO: rendere la password un hash
		$.post("/register", auth, function (data) {
			if (data === "OK") {
				console.log("Requesting gone well");
			}
			else {
				console.log("Requesting gone bad");
			}
		});
	} else {
		// TODO: Error, the confirmation doesn't match the password
	}
}
