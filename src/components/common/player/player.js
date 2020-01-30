import React, {Component} from "react";
import "./player.scss";
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

class PlayerComponent extends Component {

  render() {
    let { track, currentTime } = this.props;

    return (
      <div className="custom-player">
        <PlayButton
          className="custom-player-btn"
          onPlayClick={() => {
            console.log('play button clicked!');
          }}
          {...this.props} />
        <h2 className="custom-player-title">
          {track ? track.title : 'Loading...'}
        </h2>
        <Timer 
          className="custom-player-timer"
          duration={track ? track.duration / 1000 : 0} 
          currentTime={currentTime} 
          {...this.props} />
      </div>
    );
  }
}

export default withSoundCloudAudio(PlayerComponent);