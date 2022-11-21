
var objectUsers = [
	{
		username: "janne",
		password: "test"
	}
]

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
    console.log("click pa knapp");
});

function login() {
	
	var username = document.getElementById('username').value
	
	var password = document.getElementById('password').value

    for(var i = 0; i < objectUsers.length; i++) {
		
		if(username == objectUsers[i].username && password == objectUsers[i].password) {
			console.log(username + " is logged in!")
			break
		} else {
			console.log("incorrect username or password")
		}
	}
}
