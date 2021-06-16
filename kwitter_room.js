
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDvu7g5ClvZDAIPHkdPvuUA_F_ML6drBWw",
    authDomain: "kwitterlatest.firebaseapp.com",
    databaseURL: "https://kwitterlatest-default-rtdb.firebaseio.com",
    projectId: "kwitterlatest",
    storageBucket: "kwitterlatest.appspot.com",
    messagingSenderId: "352671653117",
    appId: "1:352671653117:web:71844eb9b47f3c7e2c3294"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name;
    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
row = "<div class = 'room_name' id="+Room_name+ "onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(room){
localStorage.setItem("room_name",room);
window.location("kwitter_page.html");
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

