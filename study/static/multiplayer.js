/*
class User_Spotify{
    constructor(){}

};
*/
var spotify_btn = document.getElementById('spotify-btn-login');

var spotifyAuthenticated= false;

var song = {};

function authenticateSpotify() {
    //request to the backend
    fetch('spotify/is-authenticated').then((response) =>  response.json()).then((data)=>{
        //state({spotifyAuthenticated: data.status});
        spotifyAuthenticated=data.status;
        if(!data.status) {
            fetch('spotify/get-auth-url')
            .then((response) => response.json())
            .then((data) =>{
                window.location.replace(data.url); //redirect
            });
        }
    });
}

function getCurrentSong(){
    var i = 0;
    fetch("/spotify/current-song")
    .then((response) => {
        if (!response.ok) {
          return {};
        } else {
          return response.json();
        }
      })
      .then((data) => {
        song[++i] = data;
        //console.log(data);
      });
}

function getInfo(){
    interval = setInterval(getCurrentSong, 1000);
}
function clearInfo(){
    clearInterval(interval);
}


spotify_btn.addEventListener('click', function(){
    authenticateSpotify();
    getCurrentSong();
    console.log(song); //output the data on the console browser
})


