# Fast forward with rewind
This is a library give you for enable-disable fast forward with rewind.

`Support reactjs`

![Demo rewind fast forward](public/demo.gif)

# Install
```
npm i @video-js-plugins/videojs-rewind-fast-forward
```

or with yarn
```
yarn add @video-js-plugins/videojs-rewind-fast-forward
```
# Usage
Calling a plugin on a player.
```
player.rewindFastForward(player, rewind)
```

# Params
| Name   | Required | Value             | Default Value | Description                                                                                                          |
|--------|----------|-------------------|---------------|----------------------------------------------------------------------------------------------------------------------|
| player | Yes      | video.js instance | -             | This value is variable from video.js instance                                                                        |
| rewind | No       | boolean           | false         | This value is to allow to rewind or not. is set true will allow to rewind. if set false disable all progress control |

# Example
```
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "@video-js-plugins/videojs-rewind-fast-forward"


export const VideoPlayer = ({ options, onReady }) => {

    const videoRef  = React.useRef(null);
    const playerRef = React.useRef(null);

    React.useEffect(() => {
        // make sure Video.js player is only initialized once
        
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options, () => {
                console.log("player is ready");
                onReady && onReady(player);
            });

            player.rewindFastForward(player) // here the plugin rewindFastForward called
        }
    }, [options, videoRef]);

...

// return jsx
<div data-vjs-player>
    <video ref={videoRef} className="video-js-player" />
</div>
```
