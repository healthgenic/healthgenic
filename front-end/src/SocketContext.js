import React ,{createContext,useState,useRef,useEffect} from "react";
import {io} from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext =createContext();

//const socket = io('http://localhost:8000');
const socket=io('https://healthgenicserver.herokuapp.com');


const ContextProvider = ({children})=> {
    const [stream , setStream]=useState();
    const [me,setMe]=useState('');
    const [call,setCall]=useState({});
    const [callAccepted ,setCallAccepted] =useState(false);
    const [callEnded,setCallEnded]=useState(false);
    const [name ,setName ]=useState('');

    const myVideo= useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    //use Effect is Similar to component Did mount
    useEffect (() => {
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then((currentStream)=> {
            setStream (currentStream);

            myVideo.current.srcObject =currentStream;
        });

        socket.on('me',(id)=>setMe(id));

        //part to create call
        socket.on('calluser',({from ,name :callerName ,signal }) => {
            setCall({isReceivedCall:true ,from,name :callerName,signal})
        });
    } ,[]);

    //Code for reciever side
    const answerCall = () => {
        setCallAccepted(true);
    
        const peer = new Peer({ initiator: false, trickle: false, stream });
    
        peer.on('signal', (data) => {
          socket.emit('answerCall', { signal: data, to: call.from });
        });
    
        peer.on('stream', (currentStream) => {
          userVideo.current.srcObject = currentStream;
        });
    
        peer.signal(call.signal);
    
        connectionRef.current = peer;
      };

    //caller side code
    const calluser =(id) => {
        const peer=new Peer ({ initiator:true,trickle:false,stream});     //Initiator is true as we are caller

        peer.on('signal', (data)=>{
            socket.emit('calluser',{userToCall:id, signalData:data , from:me,name });
        });

        peer.on('stream',(currentStream)=> {
            userVideo.current.srcObject=currentStream;
        })

        socket.on('callAccepted',(signal)=> {
            setCallAccepted(true);

            peer.signal(signal);

        });
        connectionRef.current = peer;

    };

    const leaveCall =() => {

        setCallEnded(true);

        connectionRef.current.destroy();    //This will destroy the call
        window.location.reload();         //This will reload the page

    }
    
    return (

        //The this passed in Socket Context is available globally to all components

        <SocketContext.Provider value={{
            call,
            callAccepted,
            callEnded,
            calluser,
            myVideo,
            userVideo,
            me,
            stream,
            leaveCall,
            answerCall,
            name,
            setName
        }}>
            {children}
        </SocketContext.Provider>
    );
}

export { ContextProvider, SocketContext};
