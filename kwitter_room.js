//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyBjfGa9DuD2s1mXbfCGzLHAcDpKze-0gNU",
  authDomain: "kwitter-81fe7.firebaseapp.com",
  databaseURL: "https://kwitter-81fe7-default-rtdb.firebaseio.com",
  projectId: "kwitter-81fe7",
  storageBucket: "kwitter-81fe7.appspot.com",
  messagingSenderId: "611143986768",
  appId: "1:611143986768:web:4442cd268c2c6219256b55"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Username = localStorage.getItem("Nameuser");
document.getElementById("welcomeuser").innerHTML = "Welcome " + Username;


function addroom(){
  roomname = document.getElementById("addrooms").value;
  firebase.database().ref("/").child(roomname).update({
    Purpose : "adding user"
  });

  localStorage.setItem("Room", roomname);
  window.location="Kwitter_Chat.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      
row = "<div class='room_name' id=" +Room_names+" onclick='redirecttoroom(this.id)'>" +Room_names+ "</div><hr>";
document.getElementById("output").innerHTML += row;


      //End code
    });
  });
}
getData();



function redirecttoroom(names){
  console.log(names);
localStorage.setItem("Room", names);

window.location="Kwitter_Chat.html";


}


