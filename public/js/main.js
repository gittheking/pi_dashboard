'use strict';
(() => {
  const trackAlbumArt = document.querySelector('#album-art');
  const trackArtist   = document.querySelector('#artist');
  const trackTitle    = document.querySelector('#track');
  const trackAlbum    = document.querySelector('#album');
  window.setInterval(() => {
    fetch('/music')
    .then(response => response.json())
    .then( result => {
      if(result.trackInfo && result.trackInfo.title !== trackTitle.innerText) {
        trackAlbumArt.src     = result.trackInfo.albumArtURL;
        trackArtist.innerText = result.trackInfo.artist;
        trackTitle.innerText  = result.trackInfo.title;
        trackAlbum.innerText  = result.trackInfo.album;
      } 
    });
  }, 3000)
})();