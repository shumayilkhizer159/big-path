// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZ225YRoN3QFwSgMAhoBVaCtG0G8pfFTk",
    authDomain: "big-path.firebaseapp.com",
    databaseURL: "https://big-path.firebaseio.com",
    projectId: "big-path",
    storageBucket: "big-path.appspot.com",
    messagingSenderId: "153006724066",
    appId: "1:153006724066:web:d39f0626329938e9af9fbb",
    measurementId: "G-YQ702WL6LP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   firebase.analytics();


  //reference messages collection

var messagesref =firebase.database().ref('subscription-emails');





//listen from form submit

document.getElementById('subform').addEventListener('submit', submitform);


//submit form
function submitform(e){
    e.preventDefault();
//get values


var email = getinputval('email');
//save email
savemessage(email);

//show aleart 

document.querySelector('.alertt').style.display = 'block' ;

//hide alert after 3 seconds

setTimeout(function(){
document.querySelector('.alertt').style.display = 'none' ;
},4000)

//reset form
document.getElementById('subform').reset();

}



//funtion to get form values

function getinputval(id){
    return document.getElementById(id).value;
}




//save message to firebase


function savemessage(email){
    var newmessageref=messagesref.push();
    newmessageref.set({
        email: email



        
    })
}