// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyCgerT-atSSz6zQ94rgqaMEGSlIGZqYaXQ",
  authDomain: "kwitter-45977.firebaseapp.com",
  databaseURL: "https://kwitter-45977-default-rtdb.firebaseio.com",
  projectId: "kwitter-45977",
  storageBucket: "kwitter-45977.appspot.com",
  messagingSenderId: "560919213643",
  appId: "1:560919213643:web:6e5065bdecc61898cd3fce"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome  "+ user_name + " !";
function add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
