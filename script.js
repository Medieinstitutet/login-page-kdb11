
var objectUsers = [
	{
		username: "janne",
		password: "test"
	}
]

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

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function login() {
	
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
});
