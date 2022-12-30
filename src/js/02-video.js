var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  settingItem('videoplayer-current-time', data.seconds);
};

player
  .setCurrentTime(gettingItem('videoplayer-current-time'))
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

player.on('timeupdate', throttle(onPlay, 1000));

// try/catch
function settingItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}

function gettingItem(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('Everyone makes mistakes, this is yours:', error.message);
  }
}
