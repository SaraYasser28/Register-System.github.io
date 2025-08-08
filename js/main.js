// popup message function
function showMessage(text) {
	// Remove existing message if any
	let oldMsg = document.querySelector(".message-box");
	if (oldMsg) oldMsg.remove();

	let msg = document.createElement("div");
	msg.className = "message-box message-error";
	msg.textContent = text;
	document.body.appendChild(msg);

	// Show & fade out
	setTimeout(() => msg.classList.add("show"), 50);
	setTimeout(() => {
		msg.classList.remove("show");
		setTimeout(() => msg.remove(), 500);
	}, 2500);
}


// Register function
function register() {
	let name = document.getElementById("regName")?.value?.trim();
	let email = document.getElementById("regEmail")?.value?.trim();
	let password = document.getElementById("regPassword")?.value?.trim();

	if (name === undefined) return;

	if (!name || !email || !password) {
		showMessage("All fields are required!");
		return;
	}

	let users = JSON.parse(localStorage.getItem("users")) || [];
	if (users.some((u) => u.email === email)) {
		showMessage("Email already registered!");
		return;
	}

	users.push({ name, email, password });
	localStorage.setItem("users", JSON.stringify(users));
	window.location.href = "login.html";
}

// Login function
function login() {
	let email = document.getElementById("loginEmail")?.value?.trim();
	let password = document.getElementById("loginPassword")?.value?.trim();

	if (email === undefined) return;

	let users = JSON.parse(localStorage.getItem("users")) || [];
	let user = users.find((u) => u.email === email && u.password === password);

	if (!user) {
		showMessage("Invalid email or password!");
		return;
	}

	localStorage.setItem("loggedInUser", JSON.stringify(user));
	window.location.href = "profile.html";
}

// Profile page logic
if (window.location.pathname.includes("profile.html")) {
	let user = JSON.parse(localStorage.getItem("loggedInUser"));
	if (!user) {
		window.location.href = "login.html";
	} else {
		document.getElementById("profileName").textContent = user.name;
		document.getElementById("profileEmail").textContent = user.email;
	}
}

// Logout function
function logout() {
	localStorage.removeItem("loggedInUser");
	window.location.href = "login.html";
}
