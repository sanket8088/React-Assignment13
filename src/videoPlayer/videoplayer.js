import React from 'react';
import classes from './video.module.css';
import Axios from 'axios';

class videoplayer extends React.Component {
    state = {
        idForVideo: this.props.id,
        data: { id: 1, title: "Croissants | Flour and Stone", "description": "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.", views: 22500, vimeoId: 190062231, isLiked: "true", isSaved: "true" }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.id != nextState.idForVideo) {
            this.setState({ idForVideo: nextProps.id })
            return true
        }
        else if (nextProps.id == nextState.idForVideo) {
            return true
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id != prevState.idForVideo) {
            Axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video${this.state.idForVideo}`)
                .then(response => {
                    this.setState({ data: response.data })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        return true;
    }
    render() {
        return (
            <div className={classes.leftPart}>
                <iframe className={classes.video} src={`https://player.vimeo.com/video/${this.state.data.vimeoId}`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                <div className={classes.metaTagsWrapper}>
                    <p className={classes.likes}>{this.state.data.views} Views</p>
                    <div className={classes.shareDiv}>
                        <i class="far fa-heart" style={this.state.data.isLiked === "true" ? { color: "yellow" } : null}></i>
                        <i class="far fa-comment-alt"></i>
                        <i class="far fa-bookmark" style={this.state.data.isSaved === "true" ? { color: "yellow" } : null}></i>
                    </div>
                </div>
                <div className={classes.descWrapper}>
                    <h2 className={classes.videoTitle}>{this.state.data.title}</h2>
                    <p className={classes.videoDesc}>{this.state.data.description}</p>
                </div>
            </div>
        )
    }
}

export default videoplayer;
