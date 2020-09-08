import React from 'react'
import classes from './main.module.css'
import VideoPlayer from '../videoPlayer/videoplayer'
import Playlist from '../playlist/playlist'
// import {Route} from 'react-router-dom'
class mains extends React.Component {

    state = {
        idForVideo: "/1"
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.location.pathname != nextState.idForVideo) {
            this.setState({ idForVideo: nextProps.location.pathname })
            return true
        }
        return true
    }

    render() {
        return (
            <div className={classes.mainWrapper}>
                <VideoPlayer id={this.state.idForVideo} />
                <Playlist history={this.props.history} active={this.state.idForVideo.split("/")[1]} />
            </div>
        );
    }
}

export default mains;