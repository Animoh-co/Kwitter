function addUser() {
    Name = document.getElementById("Username").value;

localStorage.setItem("Nameuser", Name);

window.location= "kwitter_room.html";
}