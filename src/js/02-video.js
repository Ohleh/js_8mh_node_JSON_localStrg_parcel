import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");

const curretTimePlayer = "videoplayer-current-time";

player.on(
  "timeupdate",
  throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem(curretTimePlayer, data.seconds);
  }, 1000)
);

console.log(localStorage.getItem(curretTimePlayer));

player
  .setCurrentTime(localStorage.getItem(curretTimePlayer))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
