const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const headerUserInfo = document.getElementById("user-header-name")
const headerUserAction = document.getElementById("user-action")

headerUserInfo.innerText = currentUser ? currentUser.fullname : ""


if(currentUser) {
    headerUserAction.innerHTML = `<button class="btn btn-danger" onclick="logout()">Logout</button>`
} else {
    headerUserAction.innerHTML = `<a class="btn btn-dark" href="/pages/login/login.html">Login</a>`
}




