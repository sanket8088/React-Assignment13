import React from 'react';
import classes from './playlist.module.css';
import axios from 'axios';
import PlaylistCard from '../VideoCard/VideoCard';

class playlist extends React.Component{
    state={
        data : [],
    }
    
    componentDidMount(){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
        .then(response=>{
            this.setState({data: [...response.data]})           
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div className={classes.rightPart}>
                {
                    this.state.data.map(item=>{
                        return (
                            <PlaylistCard key={item.id} thumbnail={item.thumbnail} title={item.title} id={item.id} {...this.props} active={this.props.active} history={this.props.history}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default playlist;