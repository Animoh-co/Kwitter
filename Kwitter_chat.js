// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBjfGa9DuD2s1mXbfCGzLHAcDpKze-0gNU",
  authDomain: "kwitter-81fe7.firebaseapp.com",
  databaseURL: "https://kwitter-81fe7-default-rtdb.firebaseio.com",
  projectId: "kwitter-81fe7",
  storageBucket: "kwitter-81fe7.appspot.com",
  messagingSenderId: "611143986768",
  appId: "1:611143986768:web:4442cd268c2c6219256b55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



roomname = localStorage.getItem("Room");
Username = localStorage.getItem("Nameuser");

function Send() {
  msg = document.getElementById("sentmsg").value;
  firebase.database().ref(roomname).push({
    Name: Username,
    Message: msg,
    Like: 0
  });
  document.getElementById("sentmsg").value = " ";
}


function getData() {
  firebase.database().ref("/" + roomname).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;


        console.log(firebase_message_id);
        console.log(message_data);

        name = message_data['Name'];
        message = message_data['Message'];
        like = message_data['Like'];

        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

        messagedisplay=name_with_tag+message_with_tag+like_button+span_with_tag;
        document.getElementById("output").innerHTML+=messagedisplay;
      }
    });
  });
}

getData();

function updateLike(message_id){
  buttonid=message_id
  likes = document.getElementById(buttonid).value;
  updatelikes= Number(likes)+1;
  firebase.database().ref(roomname).child(message_id).update({
    Like : updatelikes
  });
}

function Logoutid(){
  localStorage.removeItem("Nameuser");
  localStorage.removeItem("Room");
  window.location.replace("index.html");
}