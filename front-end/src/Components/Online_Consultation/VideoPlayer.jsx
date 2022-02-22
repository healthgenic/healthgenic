import React, { useContext, useRef } from 'react'
import { SocketContext } from '../../SocketContext';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';


const VideoPlayer=()=> {

    const {name,callAccepted,myVideo,userVideo,callEnded,stream,call} =useContext(SocketContext);
  return (
      <div className='container'>
        <div className='card-deck col-6'>
        {stream && (
            <div className='card border'>
                <video playsInline muted ref={myVideo} autoPlay />
                <button>Call</button>
            </div>
        )}

        {callAccepted && !callEnded && (
            <div className='card border col-6'>
                <video playsInline ref={userVideo} autoPlay />
            </div>
        )}
        </div>
        
    </div>
  )
}

export default VideoPlayer;


