import React from 'react';
import classes from './VideoCard.module.css';

const VideoCard = (props) => {
    const styleObj = {
        border: "2px solid yellow"
    }
    return (
        <div onClick={() => {
            window.scrollTo(0, 0);
            props.history.push(`/${props.id}`)
        }} className={classes.cardDiv} style={props.active === props.id ? styleObj : null}  >
            <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
            <h3 className={classes.Title}>{props.title}</h3>
        </div>
    );
}

export default VideoCard;
// , props.active===props.id?classes.active: null
