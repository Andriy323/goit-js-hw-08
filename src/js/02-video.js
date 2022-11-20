import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_TIME_VIDEO = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveDataLocal, 1000));

function saveDataLocal(e) {
  localStorage.setItem(KEY_TIME_VIDEO, e.seconds);
}
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

let timeVideo = localStorage.getItem(KEY_TIME_VIDEO);
timeVideo = timeVideo ? timeVideo : 0;
console.log(timeVideo);
player
  .setCurrentTime(timeVideo)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
