'use strict';
(() => {

  const trackAlbumArt = document.querySelector('#album-art');
  const trackArtist   = document.querySelector('#artist');
  const trackTitle    = document.querySelector('#track');
  const trackAlbum    = document.querySelector('#album');
  const volumeSlider  = document.querySelector('#volume');
  
  function updateTrackInfo() {
    fetch('/music')
    .then(response => response.json())
    .then( result => {
      if(result.volume != volumeSlider.value) volumeSlider.value = '' + result.volume;
      if(result.trackInfo && result.trackInfo.title !== trackTitle.innerText) {
        trackAlbumArt.src     = result.trackInfo.albumArtURL;
        trackArtist.innerText = result.trackInfo.artist;
        trackTitle.innerText  = result.trackInfo.title;
        trackAlbum.innerText  = result.trackInfo.album;
      } 
    })
    .catch( err => {
      console.log('Fetch error: ',err);
    });
  }

  function updateVolume(event) {
    fetch(`/music/${event.target.value}`, {
      method: 'PUT'
    })
    .catch(err => {
      console.log('Fetch Error: ', err);
    });
  }

  window.setInterval(updateTrackInfo,3000);
  volumeSlider.addEventListener('change',updateVolume);
})();