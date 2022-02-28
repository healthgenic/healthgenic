import React, { useContext } from 'react'
import { Button } from '@material-ui/core';
import { SocketContext } from '../../SocketContext'

const Notification=()=> {
  const{answerCall ,call,callAccepted} = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button variant="contained" className="btn btn-sm" color="primary" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
    
  )
}

export default Notification;