import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");

const curretTimePlayer = "videoplayer-current-time";

player.on(
  "timeupdate",
  throttle((data) => currentTime(data), 1000)
);

function currentTime(data) {
  console.log(data.seconds);
  localStorage.setItem(curretTimePlayer, data.seconds);
}

const cuttentTimePlay = localStorage.getItem(curretTimePlayer) ?? 0;

player
  .setCurrentTime(cuttentTimePlay)
  .then(function (seconds) {
    console.log("prommise return", seconds);
  })
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
