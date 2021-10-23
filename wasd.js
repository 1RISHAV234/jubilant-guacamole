var user_name = localStorage.getItem("user_name");
function start() {
    document.getElementById("qwerty").innerHTML="Welcome "+user_name+" :)"
}
function logout() {
    localStorage.removeItem("user_name");
    window.location="index.html"
}