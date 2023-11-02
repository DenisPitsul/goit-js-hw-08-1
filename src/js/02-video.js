import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const CURRENT_TIME_KEY = "videoplayer-current-time"

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))

player.on('timeupdate', throttle((data) => {
    console.log(data)
    localStorage.setItem(CURRENT_TIME_KEY, data.seconds.toString());
}, 1000));