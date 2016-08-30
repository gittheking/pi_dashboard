'use strict';
(() => {
  
  // Storing DOM elements in constants
  const trackAlbumArt  = document.querySelector('#album-art');
  const trackArtist    = document.querySelector('#artist');
  const trackTitle     = document.querySelector('#track');
  const trackAlbum     = document.querySelector('#album');
  const volumeSlider   = document.querySelector('#volume');
  const muteButton     = document.querySelector('#volume-icon');
  const nextButton     = document.querySelector('#next');
  const playButton     = document.querySelector('#play');
  const stopButton     = document.querySelector('#stop');
  const previousButton = document.querySelector('#previous');
  
  // Functions
  function getTrackInfo() {
    fetch('/music/track')
    .then(response => response.json())
    .then(result => {
      updateTrackInfo(result);
    })
    .catch(err => console.log('Fetch error: ',err));
  }

  function getPlayState() {
    fetch('/music/state')
    .then(response => response.json())
    .then(result => togglePlayStop(result))
    .catch(err => console.log('Fetch Error: ', err));
  }

  function setVolume(event) {
    fetch(`/music/volume/${event.target.value}`, {
      method: 'PUT'
    })
    .catch(err => console.log('Fetch Error: ', err));
  }

  function getVolume() {
    fetch('/music/volume')
    .then(response => response.json())
    .then(result => {
      if(result.volume !== volumeSlider.value && result.volume !== undefined) {
        volumeSlider.value = '' + result.volume;
      }
    })
    .catch(err => console.log('Fetch error: ',err));
  }

  function playNext() {
    console.log('next!');
    fetch('/music/next')
    .then(response => response.json())
    .then(result => {
      updateTrackInfo(result);
    })
    .catch(err => console.log('Fetch error: ',err));
  }

  function playPrevious() {
    console.log('previous!');
    fetch('/music/previous')
    .then(response => response.json())
    .then(result => {
      updateTrackInfo(result);
    })
    .catch(err => console.log('Fetch error: ',err));
  }

  function play() {
    console.log('play!');
    fetch('/music/play')
    .then(response => response.json())
    .then(result => console.log(result));
  }

  function stop() {
    fetch('/music/stop')
    .then(response => response.json())
    .then(result => console.log(result));
  }

  // Functions to keep it DRY
  function updateTrackInfo(result) {
    if(result.volume !== volumeSlider.value && result.volume !== undefined) {
      volumeSlider.value = '' + result.volume;
    }
    if(result.trackInfo && result.trackInfo.title !== trackTitle.innerText) {
      trackAlbumArt.src     = result.trackInfo.albumArtURL;
      trackArtist.innerText = result.trackInfo.artist;
      trackTitle.innerText  = result.trackInfo.title;
      trackAlbum.innerText  = result.trackInfo.album;
    } 
  }

  function togglePlayStop(result) {
    console.log(result);
    if(result.state === 'paused' || result.state === 'stopped') {
      stopButton.style.display = 'none';
      playButton.style.display = '';
    } else {
      stopButton.style.display = '';
      playButton.style.display = 'none';
    }
  }

  // Event Listeners
  volumeSlider.addEventListener('change',setVolume);
  nextButton.addEventListener('click',playNext);
  previousButton.addEventListener('click',playPrevious);
  playButton.addEventListener('click',() => {
    play();
    getPlayState();
  });
  stopButton.addEventListener('click',() => {
    stop();
    getPlayState(); 
  });

  // IIFE for current SONOS state and repetetive updates
  (function updateDOM() {
    getTrackInfo();
    getVolume();
    getPlayState();
    setTimeout(updateDOM,10000);
  })()

})();
