//TUS ANLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyC_vjL283rf6lf-XGrNApHexMOPghhzOSk",
      authDomain: "kwitter-6981d.firebaseapp.com",
      databaseURL: "https://kwitter-6981d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6981d",
      storageBucket: "kwitter-6981d.appspot.com",
      messagingSenderId: "378913752389",
      appId: "1:378913752389:web:6a095886c188d61066ea2c"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código

//Termina código
      } });  }); }
getData();
