'use strict';
(() => {
  const trackArtist = document.querySelector('#artist');
  const trackTitle  = document.querySelector('#track');
  const trackAlbum  = document.querySelector('#album');
  window.setInterval(() => {
    fetch('/music')
    .then(response => response.json())
    .then( result => {
      if(result.track) {
        trackArtist.innerText = result.track.artist;
        trackTitle.innerText  = result.track.title;
        trackAlbum.innerText  = result.track.album;
      }
    });
  }, 3000)
})();