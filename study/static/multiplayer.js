/*
class User_Spotify{
    constructor(){}

};
*/
var spotify_btn = document.getElementById('spotify-btn-login');

var spotifyAuthenticated= false;


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
spotify_btn.addEventListener('click', function(){
    authenticateSpotify();
})


