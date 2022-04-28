import videojs from "video.js";

const rewindFastForward = function(player, rewind = true) {
    let currentTime = 0;

    if (rewind) {

        player.on("seeking", function(event) {
            if (currentTime < player.currentTime()) {
                player.currentTime(currentTime);
            }
        });
    
        player.on("seeked", function(event) {
            if (currentTime < player.currentTime()) {
                player.currentTime(currentTime);
            }
        });

        player.on('timeupdate', function() {
            if (!player?.paused()) {
                currentTime = player.currentTime();
            }
        })

    } else {
        player.controlBar.progressControl.disable()
    }

}

const registerRewindFastForward = () => {
    videojs.registerPlugin("rewindFastForward", rewindFastForward);
}
registerRewindFastForward()

export default registerRewindFastForward;