import React, { useState, useContext } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { SocketContext } from '../../SocketContext';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';

const Options =({children}) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, calluser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
    <div className='container'>
    <Paper> 
        <div className='card-deck'>
            <div className='card'>
                    <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                    {console.log(me)}
                    <CopyToClipboard text={me}>
                        <button className='btn btn-primary'> Copy Your ID</button>
                    </CopyToClipboard>
            </div>

            <div className='card'>
                    <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                    {callAccepted && !callEnded ? (
                        <button className='btn btn-primary' onClick={leaveCall}>End Call</button>
                    ):(
                        <button className='btn btn-primary' onClick={() => calluser(idToCall)}>Call</button>
                    )}
               
            </div>
            </div>
            {children}
    </Paper>   
          
        
       
    </div>    

    );
};

export default Options;