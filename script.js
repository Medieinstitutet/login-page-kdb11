
var objectUsers = [
	{
		username: "janne",
		password: "test"
	}
]

const mainForm = document.getElementById("mainForm");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn.addEventListener("click", function login() {
	
	var username = document.getElementById('username').value
	
	var password = document.getElementById('password').value

    for(var i = 0; i < objectUsers.length; i++) {
		
		if(username == objectUsers[i].username && password == objectUsers[i].password) {
			console.log(username + " is logged in!")
            document.body.style.backgroundImage = "url('Assets/windowsBackground.jpg')";
			mainForm.style.display = "none";
			logoutBtn.style.display = "block";
			break
		} else {
			console.log("incorrect username or password")
		}
	}
});

logoutBtn.addEventListener("click", function logout() {

    document.body.style.backgroundImage = "url('Assets/animatedWindows.gif')";
	mainForm.style.display = "block";
	logoutBtn.style.display = "none";

});

/* function login() {
	
	var username = document.getElementById('username').value
	
	var password = document.getElementById('password').value

    for(var i = 0; i < objectUsers.length; i++) {
		
		if(username == objectUsers[i].username && password == objectUsers[i].password) {
			console.log(username + " is logged in!")
            document.body.style.backgroundImage = "url('Assets/windowsBackground.jpg')";
			break
		} else {
			console.log("incorrect username or password")
		}
	}
} */
